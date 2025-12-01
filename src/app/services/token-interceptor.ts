import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  let _token = localStorage.getItem('token') || 'ggez';
  if (_token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${_token}`
      }
    });
  }
  return next(req);
};
