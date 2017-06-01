package com.android.start.infrastructure;

/**
 * Created by Juan Manuel Romera on 28/5/2017.
 */

public interface Database {

    <T extends Object> void save(String key, Object value);

    <T extends Object> T get(String key, Class<T> classValue);
}
