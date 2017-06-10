package com.kuma.startandroid.process.task;

import com.kuma.startandroid.error.BuildProjectException;
import com.kuma.startandroid.file.ProjectFiles;
import com.kuma.startandroid.process.AndroidProjectConfiguration;

public class CopyAndTransformFiles implements CreateProjectTask {

  @Override
  public void execute(AndroidProjectConfiguration configuration) throws BuildProjectException {
    ProjectFiles.copyAndTransform(configuration.getResourcesProperties()
        .getSourceProjectFolderPath(), configuration.getResultPath(), configuration
        .getResourcesProperties().getTransformTags(), configuration.getResourcesProperties()
        .getFilters());

    configuration.getResultPackagesFolders().forEach(
        (k, v) -> {
          ProjectFiles.copyAndTransform(configuration.getResourcesProperties()
              .getSourcePackageFolderPath() + ProjectFiles.SLASH + k, v, configuration
              .getResourcesProperties().getTransformTags(), configuration.getResourcesProperties()
              .getFilters());

        });
  }
}
