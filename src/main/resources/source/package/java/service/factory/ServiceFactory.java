package com.android.start.service.factory;


import com.android.start.infrastructure.Database;
import com.android.start.service.api.Service;
import com.android.start.service.api.ServiceType;
import com.android.start.service.api.Services;
import com.android.start.service.api.UserService;
import com.android.start.service.impl.UserServiceMock;

import java.util.HashMap;
import java.util.Map;


/**
 * Created by Juan Manuel Romera on 17/5/2016.
 */
public class ServiceFactory {

    private static Map<ServiceType, Service> services = new HashMap<>();


    private ServiceFactory() {
    }

    public static void init(Services type, Database database) {
        buildServices(type, database);
    }

    private static void buildServices(Services type, Database database) {
        if (type.equals(Services.REAL)) {
            buildRealServices(database);
        } else {
            buildMockServices(database);
        }
    }

    private static void buildRealServices(Database database) {
        // TODO: create real services here
    }

    private static void buildMockServices(Database database) {
        UserService userService = new UserServiceMock(database);
        save(userService);
    }

    private static void save(Service service) {
        services.put(service.getType(), service);
    }

    public static UserService getUserService() {
        return (UserService) services.get(ServiceType.USER);
    }

}
