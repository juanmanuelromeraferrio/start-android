package com.kuma.startandroid.process.task;

import java.io.IOException;
import java.io.PrintWriter;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.stream.Stream;

import com.kuma.startandroid.error.BuildProjectException;
import com.kuma.startandroid.process.AndroidProjectConfiguration;

public class CopyAndTransformFiles implements CreateProjectTask {

  @Override
  public void execute(AndroidProjectConfiguration configuration) throws BuildProjectException {

    copyAndTransform(configuration.getResourcesProperties().getSourceProjectFolderPath(),
        configuration.getResultPath(), "a", "x");
  }

  private void copyAndTransform(String origin, String destination, String original, String replace) {

    Path originPath = Paths.get(origin);
    try {
      Files.list(originPath).forEach(
          file -> {
            boolean isDirectory = Files.isDirectory(file);
            if (isDirectory) {
              Path path =
                  Paths.get(destination + "/"
                      + file.toString().substring(file.toString().lastIndexOf("\\") + 1));
              if (!Files.exists(path)) {
                try {
                  Files.createDirectories(path);
                } catch (Exception e) {
                  throw new BuildProjectException("Error creating project");
                }
              }

              copyAndTransform(file.toString(), path.toString(), original, replace);

            } else {
              Stream<String> input = null;
              PrintWriter output = null;
              try {

                String extension =
                    file.toString().substring(file.toString().lastIndexOf(".") + 1,
                        file.toString().length());
                if (extension.equals("java")) {
                  input = Files.lines(file);
                  output = new PrintWriter(destination + "/" + file.getFileName().toString());
                  input.map(s -> s.replaceAll(original, replace)).forEach(output::println);
                } else {
                  Files.copy(file, Paths.get(destination + "/" + file.getFileName().toString()));
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
}
