package com.android.start.activity.splash;

import android.os.AsyncTask;

import com.android.start.activity.TaskResponse;
import com.android.start.service.factory.ServiceFactory;


/**
 * Created by Juan Manuel Romera on 17/6/2016.
 */
public class DispatchControllerImpl implements DispatchController {

    private DispatchView view;

    public DispatchControllerImpl(DispatchView view) {
        this.view = view;
    }

    @Override
    public void dispatch() {
        DispatchTask task = new DispatchTask(ServiceFactory.getUserService(), this);
        task.executeOnExecutor(AsyncTask.THREAD_POOL_EXECUTOR);
    }

    @Override
    public void initTask() {
    }

    @Override
    public void finishTask() {
    }

    @Override
    public void onResult(Object result) {
        TaskResponse taskResponse = (TaskResponse) result;
        Class<?> activityClass = (Class<?>) taskResponse.getResponse();
        view.goToNext(activityClass);
    }
}
