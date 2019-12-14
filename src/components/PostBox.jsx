import React, { Component } from "react";

class PostBox extends Component {
  // handleSubmit = e => {
  //   e.preventDefault();
  // };

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <div className="card border-light mb-3">
          <div className="card-header">Crear Publicación</div>
          <div className="card-body">
            <textarea
              ref={ref => (this.textRef = ref)}
              placeholder="¿Qué estás pensando?"
              className="form-control nooutline"
            />

            <label htmlFor="photoUpload" className="btn btn-secondary m-0 ml-2 mr-2">
              Foto
            </label>

            <input
              ref={ref => (this.imageRef = ref)}
              type="file"
              id="photoUpload"
              className="form-control-file d-none"
            />

            <button type="submit" className="btn btn-primary">
              Publicar
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default PostBox;
