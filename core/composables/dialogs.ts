export async function alert(message: string, title?: string, okButtonText?: string) {
  window.alert(title ? `${title}\n\n${message}` : message);
}

export async function confirm(message: string, title?: string, okButtonText?: string, cancelButtonText?: string): Promise<boolean> {
  return window.confirm(title ? `${title}\n\n${message}` : message);
}

export async function prompt(message: string, defaultText = '', title?: string, okButtonText?: string, cancelButtonText?: string): Promise<{ result: boolean; text: string }> {
  const res = window.prompt(title ? `${title}\n\n${message}` : message, defaultText);
  return { result: res !== null, text: res ?? '' };
}

export async function login(message = '登录', userName = '', password = '', title?: string, okButtonText?: string, cancelButtonText?: string): Promise<{ result: boolean; userName: string; password: string }> {
  const u = window.prompt(title ? `${title}\n\n${message} - 用户名` : `${message} - 用户名`, userName);
  if (u === null) return { result: false, userName: '', password: '' };
  const p = window.prompt(title ? `${title}\n\n${message} - 密码` : `${message} - 密码`, password);
  if (p === null) return { result: false, userName: '', password: '' };
  return { result: true, userName: u, password: p };
}

export async function action(options: string | { message?: string; cancelButtonText?: string; actions?: string[] }, title?: string): Promise<string | undefined> {
  let message = typeof options === 'string' ? options : (options.message || '选择一个操作');
  const actions = typeof options === 'string' ? [] : (options.actions || []);
  const promptText = title ? `${title}\n\n${message}${actions.length ? `\n选项: ${actions.join(', ')}` : ''}` : `${message}${actions.length ? `\n选项: ${actions.join(', ')}` : ''}`;
  const res = window.prompt(promptText);
  if (!res) return undefined;
  if (!actions.length) return res;
  const match = actions.find(a => a.toLowerCase() === res.toLowerCase());
  return match ?? undefined;
}