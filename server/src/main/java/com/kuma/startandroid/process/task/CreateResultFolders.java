package com.kuma.startandroid.process.task;

import com.kuma.startandroid.error.BuildProjectException;
import com.kuma.startandroid.file.ProjectFiles;
import com.kuma.startandroid.process.AndroidProjectConfiguration;

import java.nio.file.Paths;

public class CreateResultFolders implements CreateProjectTask {

    @Override
    public void execute(AndroidProjectConfiguration configuration)
            throws BuildProjectException {

        // Create Result Folder
        String _resultPath = getResultPath(configuration);
        ProjectFiles.createDirectories(Paths.get(_resultPath));
        configuration.setResultPath(_resultPath);

        // Create Package Folder
        String packagePath = getPackagePath(configuration);
        configuration.getResourcesProperties().getPackagesFolders()
                .forEach((k, v) -> {
                    String path = _resultPath + v + packagePath;
                    ProjectFiles.createDirectories(Paths.get(path));
                    configuration.addPackageFolder(k, path);
                });

    }

    private String getPackagePath(AndroidProjectConfiguration configuration) {
        return configuration.getProjectPackage().replace(ProjectFiles.DOT, ProjectFiles.SLASH);
    }

    private String getResultPath(AndroidProjectConfiguration configuration) {
        String _resultPath = configuration.getResourcesProperties()
                .getResultFolderPath()
                + ProjectFiles.SLASH
                + configuration.getProjectPackage().replace(ProjectFiles.DOT, ProjectFiles.DASH)
                + ProjectFiles.DASH
                + System.currentTimeMillis();
        return _resultPath;
    }


}
