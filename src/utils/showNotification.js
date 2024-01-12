import { ElNotification } from 'element-plus'

/**
 * 展示普通的通知信息
 * @param title {String} 通知标题
 * @param message {String} 通知信息
 */
export function showNormalNotification(title, message) {
  ElNotification({
    title: title,
    message: message,
    type: 'info'
  })
}

/**
 * 展示成功的通知信息
 * @param title {String} 通知标题
 * @param message {String}通知信息
 */
export function showSuccessNotification(title, message) {
  ElNotification({
    title: title,
    message: message,
    type: 'success'
  })
}

/**
 * 展示警告的通知信息
 * @param title {String} 通知标题
 * @param message {String} 通知信息
 */
export function showWarningNotification(title, message) {
  ElNotification({
    title: title,
    message: message,
    type: 'warning'
  })
}

/**
 * 展示错误的通知信息
 * @param title {String} 通知标题
 * @param message {String}通知信息
 */
export function showErrorNotification(title, message) {
  ElNotification({
    title: title,
    message: message,
    type: 'error'
  })
}

/**
 * 关闭页面上的所有通知
 */
export function closeAllNotification() {
  ElNotification.closeAll()
}
