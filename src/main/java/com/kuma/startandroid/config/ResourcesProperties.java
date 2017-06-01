package com.kuma.startandroid.config;

import java.util.Map;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@ConfigurationProperties(prefix = "resources")
@Component
public class ResourcesProperties {

	private String sourcePackageFolderPath;
	private String sourceProjectFolderPath;
	private String resultFolderPath;
	private Map<String, String> packagesFolders;

	public String getSourcePackageFolderPath() {
		return sourcePackageFolderPath;
	}

	public void setSourcePackageFolderPath(String sourcePackageFolderPath) {
		this.sourcePackageFolderPath = sourcePackageFolderPath;
	}

	public String getSourceProjectFolderPath() {
		return sourceProjectFolderPath;
	}

	public void setSourceProjectFolderPath(String sourceProjectFolderPath) {
		this.sourceProjectFolderPath = sourceProjectFolderPath;
	}

	public String getResultFolderPath() {
		return resultFolderPath;
	}

	public void setResultFolderPath(String resultFolderPath) {
		this.resultFolderPath = resultFolderPath;
	}

	public Map<String, String> getPackagesFolders() {
		return packagesFolders;
	}

	public void setPackagesFolders(Map<String, String> packagesFolders) {
		this.packagesFolders = packagesFolders;
	}

}
