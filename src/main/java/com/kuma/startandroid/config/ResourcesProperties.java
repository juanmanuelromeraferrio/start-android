package com.kuma.startandroid.config;

import java.util.Map;
import java.util.Set;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@ConfigurationProperties(prefix = "resources")
@Component
public class ResourcesProperties {

  private String sourcePackageFolderPath;
  private String sourceProjectFolderPath;
  private String resultFolderPath;
  private Map<String, String> packagesFolders;
  private Set<String> filters;
  private Map<String, String> transformTags;

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

  public Set<String> getFilters() {
    return filters;
  }

  public void setFilters(Set<String> filters) {
    this.filters = filters;
  }

  public Map<String, String> getTransformTags() {
    return transformTags;
  }

  public void setTransformTags(Map<String, String> transformTags) {
    this.transformTags = transformTags;
  }



}
