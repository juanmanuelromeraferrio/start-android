package com.kuma.startandroid.process.task;

import com.kuma.startandroid.error.BuildProjectException;
import com.kuma.startandroid.file.ProjectFiles;
import com.kuma.startandroid.process.AndroidProjectConfiguration;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class CopyAndTransformFiles implements CreateProjectTask {

    @Override
    public void execute(AndroidProjectConfiguration configuration) throws BuildProjectException {
        Map<String, String> transform = new HashMap<>();
        transform.put("a", "@");

        Set<String> filters = new HashSet<>();
        filters.add("properties");
        filters.add("java");
        filters.add("xml");

        ProjectFiles.copyAndTransform(configuration.getResourcesProperties().getSourceProjectFolderPath(),
                configuration.getResultPath(),
                transform, filters);
    }
}
