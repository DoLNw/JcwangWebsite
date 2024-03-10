package com.jcwang.jcwangwebsite.model;

public class AntApiResult {
    private Boolean success;
    private Object data;

    public AntApiResult(Boolean success, Object data) {
        this.success = success;
        this.data = data;
    }

    public Boolean getSuccess() {
        return success;
    }

    public void setSuccess(Boolean success) {
        this.success = success;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }
}
