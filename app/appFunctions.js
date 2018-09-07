/**
 * @description fetch initials from name
 * @param {string} name
 * @return {string}    initials
 */
export function getInitials(name) {
  const names = name.split(' ');
  let initials = names[0].substring(0, 1).toUpperCase();
  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  } else {
    initials += names[0].substring(1, 2).toUpperCase();
  }
  return initials;
}
export const scrollToTop = (element) => {
  const messageList = element;
  messageList.scrollTop = 0;
};
export const scrollToBottom = (element) => {
  if (!element) {
    return false;
  }
  const messageList = element;
  const scrollHeight = messageList.scrollHeight;
  const height = messageList.clientHeight;
  const maxScrollTop = scrollHeight - height;
  messageList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  return true;
};
