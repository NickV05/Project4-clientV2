import { post } from "./authService";
import { AxiosResponse } from "axios"; 

export const fileChange = async (e: React.ChangeEvent<HTMLInputElement>): Promise<AxiosResponse> => {
  const uploadData = new FormData();

  if (e.target.files && e.target.files[0]) {
    uploadData.append("image", e.target.files[0]);
  }

  try {
    const response = await post('/users/imageUpload', uploadData);
    return response;
  } catch (error) {
    throw error;
  }
};