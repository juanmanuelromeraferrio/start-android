package com.kuma.startandroid.file;

import com.kuma.startandroid.error.BuildProjectException;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Collection;
import java.util.Map;
import java.util.Set;
import java.util.stream.Stream;

/**
 * Created by jromera on 1/6/17.
 */
public class ProjectFiles {

    public static final String SLASH = File.separator;
    public static final String DOT = ".";
    public static final String DASH = "-";

    public static void createDirectories(Path path) throws BuildProjectException {
        if (!Files.exists(path)) {
            try {
                Files.createDirectories(path);
            } catch (IOException e) {
                throw new BuildProjectException(e.getMessage());
            }
        } else {
            throw new BuildProjectException("Error creating project");
        }
    }

    public static void copyAndTransform(String source, String target, Map<String, String> transform, Set<String> filters) {
        Path originPath = Paths.get(source);
        try {
            Files.list(originPath).forEach(
                    (Path file) -> {
                        boolean isDirectory = Files.isDirectory(file);
                        if (isDirectory) {
                            Path targetPath =
                                    Paths.get(target + SLASH + ProjectFiles.getLastFolderOfPath(file));
                            if (!Files.exists(targetPath)) {
                                try {
                                    Files.createDirectories(targetPath);
                                } catch (Exception e) {
                                    throw new BuildProjectException("Error creating project");
                                }
                            }

                            copyAndTransform(file.toString(), targetPath.toString(), transform, filters);

                        } else {
                            Stream<String> input = null;
                            PrintWriter output = null;
                            try {
                                String extension = getExtension(file);
                                if (filters.contains(extension)) {
                                    input = Files.lines(file);
                                    output = new PrintWriter(target + SLASH + file.getFileName().toString());
                                    input.map(s -> {
                                                Collection<String> values = transform.keySet();
                                                for (String key : values) {
                                                    s = s.replaceAll(key, transform.get(key));
                                                }
                                                return s;
                                            }
                                    ).forEach(output::println);
                                } else {
                                    Files.copy(file, Paths.get(target + SLASH + file.getFileName().toString()));
                                }
                            } catch (Exception e) {
                                throw new BuildProjectException("Error creating project");
                            } finally {
                                if (input != null)
                                    input.close();
                                if (output != null)
                                    output.close();
                            }
                        }
                    });
        } catch (IOException e) {
            throw new BuildProjectException("Error creating project");
        }
    }

    private static String getLastFolderOfPath(Path path) {
        return path.toString().substring(path.toString().lastIndexOf(SLASH) + 1);
    }

    private static String getExtension(Path path) {
        return path.toString().substring(path.toString().lastIndexOf(DOT) + 1,
                path.toString().length());
    }
}
