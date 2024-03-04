package io.generalgalactic.capacitor.esp_idf_provisioning.listeners;

public interface VersionInfoListener {

    public void versionInfo(String versionInfo);

    public void deviceNotFound(String deviceName);

}
