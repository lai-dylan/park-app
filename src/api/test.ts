import http, {ApiResponse} from '@/utils/http.ts';

export function login(params: any): Promise<ApiResponse> {
  console.log(params);
  return http.get('/success');
}
