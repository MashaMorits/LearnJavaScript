function showNotification(options) {
    const notification = document.createElement('div')
    document.body.append(notification)
    notification.textContent = options.html
    notification.style.top = options.top + 'px'
    notification.style.right = options.right + 'px'
    notification.style.position = 'absolute'
    notification.className = options.className

    setTimeout(() => notification.remove(), 1500)
}



showNotification({
    top: 10, // 10px от верхней границы окна (по умолчанию 0px)
    right: 10, // 10px от правого края окна (по умолчанию 0px)
    html: "Hello!", // HTML-уведомление
    className: "welcome" // дополнительный класс для div (необязательно)
  });



  showNotification({
    top: 10, // 10px от верхней границы окна (по умолчанию 0px)
    right: 10, // 10px от правого края окна (по умолчанию 0px)
    html: "Hello!", // HTML-уведомление
    className: "welcome" // дополнительный класс для div (необязательно)
  });