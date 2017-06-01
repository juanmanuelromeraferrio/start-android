package com.kuma.startandroid.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kuma.startandroid.config.ResourcesProperties;
import com.kuma.startandroid.error.BuildProjectException;
import com.kuma.startandroid.process.AndroidProjectConfiguration;
import com.kuma.startandroid.process.ProjectBuilder;

@RestController
@RequestMapping("/project")
public class ProjectController {

	@Autowired
	private ResourcesProperties resourceProperties;

	@GetMapping(value = "/{id}")
	public ResponseEntity<String> getProject(@PathVariable("id") Integer id)
			throws BuildProjectException {

		AndroidProjectConfiguration configuration = new AndroidProjectConfiguration(resourceProperties);
		configuration.setProjectPackage("com.chicha.arq");

		ProjectBuilder projectBuilder = new ProjectBuilder();
		projectBuilder.buildProject(configuration);

		return new ResponseEntity<String>(
				"hello", HttpStatus.OK);
	}
}
