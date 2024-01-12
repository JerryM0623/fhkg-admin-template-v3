import { ElMessage } from 'element-plus'

/**
 * 弹出成功的消息提示窗
 * @param message {String}  消息内容
 */
export function showSuccessMessage(message) {
  ElMessage({
    message: message,
    type: 'success',
    duration: 3000, // 设置显示时间
  });
}

/**
 * 弹出警告的消息提示窗
 * @param message {String}  消息内容
 */
export function showWarningMessage(message) {
  ElMessage({
    message: message,
    type: 'warning',
    duration: 3000, // 设置显示时间
  });
}

/**
 * 弹出错误的消息提示窗
 * @param message {String}  消息内容
 */
export function showErrorMessage(message) {
  ElMessage({
    message: message,
    type: 'error',
    duration: 3000, // 设置显示时间
  });
}

/**
 * 弹出默认的消息提示窗
 * @param message {String}  消息内容
 */
export function showInfoMessage(message) {
  ElMessage({
    message: message,
    type: 'info',
    duration: 3000, // 设置显示时间
  });
}
