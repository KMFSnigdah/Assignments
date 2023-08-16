function showSuccessNotification() {
    const notificationContainer = document.getElementById(
      "notification-container"
    );

    const successNotification = document.createElement("div");
    successNotification.className = "alert alert-success";
    successNotification.textContent = "Registration successful!";

    notificationContainer.appendChild(successNotification);
    setTimeout(function () {
      successNotification.remove();
    }, 5000);
  }