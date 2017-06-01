package com.kuma.startandroid.process.task;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import com.kuma.startandroid.error.BuildProjectException;
import com.kuma.startandroid.process.AndroidProjectConfiguration;

public class CreateResultFolders implements CreateProjectTask {

	private final String SLASH = "/";

	@Override
	public void execute(AndroidProjectConfiguration configuration)
			throws BuildProjectException {

		// Create Result Folder
		String _resultPath = getResultPath(configuration);
		createDirectories(Paths.get(_resultPath));
		configuration.setResultPath(_resultPath);

		// Create Package Folder
		String packagePath = getPackagePath(configuration);
		configuration.getResourcesProperties().getPackagesFolders()
				.forEach((k, v) -> {
					String path = _resultPath + v + packagePath;
					createDirectories(Paths.get(path));
					configuration.addPackageFolder(k, path);
				});

	}

	private String getPackagePath(AndroidProjectConfiguration configuration) {
		return configuration.getProjectPackage().replace(".", SLASH);
	}

	private String getResultPath(AndroidProjectConfiguration configuration) {
		String _resultPath = configuration.getResourcesProperties()
				.getResultFolderPath()
				+ SLASH
				+ configuration.getProjectPackage().replace(".", "-")
				+ "-"
				+ System.currentTimeMillis();
		return _resultPath;
	}

	private void createDirectories(Path path) throws BuildProjectException {
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

}
