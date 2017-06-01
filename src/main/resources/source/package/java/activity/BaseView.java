package com.android.start.activity;

import android.content.Context;

/**
 * Created by Juan Manuel Romera on 21/5/2016.
 */
public interface BaseView {

    void showProgress();

    void hideProgress();

    void goToNext();

    Context getContext();
}
