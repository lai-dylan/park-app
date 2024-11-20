import http, {ApiResponse} from "@/utils/http.ts";

export function login(params: any): Promise<ApiResponse> {
  return http.post("/login", params);
}

export function getMenu(): Promise<ApiResponse> {
  return http.get("/menu");
}