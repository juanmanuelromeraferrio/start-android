package com.kuma.startandroid.process;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import com.kuma.startandroid.error.BuildProjectException;
import com.kuma.startandroid.process.task.CopyAndTransformFiles;
import com.kuma.startandroid.process.task.CreateProjectTask;
import com.kuma.startandroid.process.task.CreateResultFolders;

public class ProjectBuilder {

	private List<CreateProjectTask> tasks = Collections.unmodifiableList(Arrays
			.asList(new CreateResultFolders(), new CopyAndTransformFiles()));

	public void buildProject(AndroidProjectConfiguration configuration) throws BuildProjectException {
		for (CreateProjectTask task : tasks) {
			task.execute(configuration);
		}
	}
}
