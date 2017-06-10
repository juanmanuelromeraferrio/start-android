package com.kuma.startandroid.process;

import java.util.HashMap;
import java.util.Map;

import com.kuma.startandroid.config.ResourcesProperties;

public class AndroidProjectConfiguration {

  private String resultPath;
  private String projectPackage;
  private Map<String, String> resultPackagesFolders;
  private ResourcesProperties resourcesProperties;

  public AndroidProjectConfiguration(ResourcesProperties resourceProperties) {
    this.resourcesProperties = resourceProperties;
    this.resultPackagesFolders = new HashMap<String, String>();
  }

  public String getResultPath() {
    return resultPath;
  }

  public void setResultPath(String resultPath) {
    this.resultPath = resultPath;
  }

  public String getProjectPackage() {
    return projectPackage;
  }

  public void setProjectPackage(String projectPackage) {
    this.projectPackage = projectPackage;
  }

  public ResourcesProperties getResourcesProperties() {
    return resourcesProperties;
  }

  public void setResourcesProperties(ResourcesProperties resourcesProperties) {
    this.resourcesProperties = resourcesProperties;
  }

  public Map<String, String> getResultPackagesFolders() {
    return resultPackagesFolders;
  }

  public void addPackageFolder(String key, String value) {
    this.resultPackagesFolders.put(key, value);
  }

  public void setResultPackagesFolders(Map<String, String> resultPackagesFolders) {
    this.resultPackagesFolders = resultPackagesFolders;
  }

  public void addTransformTag(String key, String value) {
    this.resourcesProperties.getTransformTags().put(key, value);

  }

}
