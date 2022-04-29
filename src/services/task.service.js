import http from "./http.service";

const taskUrl = "/task";

class TaskService {
  get(body) {
    return http.get(`${taskUrl}`, body);
  }

  getById(id) {
    return http.get(`${taskUrl}/${id}`);
  }

  updateById(id, body) {
    return http.patch(`${taskUrl}/${id}`, body);
  }

  deleteById(id) {
    return http.delete(`${taskUrl}/${id}`);
  }
}

export default new TaskService();
