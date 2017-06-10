package com.kuma.startandroid.process.task;

import com.kuma.startandroid.error.BuildProjectException;
import com.kuma.startandroid.process.AndroidProjectConfiguration;

public interface CreateProjectTask {

	void execute(AndroidProjectConfiguration configuration) throws BuildProjectException;

}
