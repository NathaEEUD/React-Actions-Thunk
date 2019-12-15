import React, { Component } from "react";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    // reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

class PostBox extends Component {
  render() {
    const { postCreate } = this.props;

    return (
      <form
        onSubmit={async (e) => {
          // https://stackoverflow.com/questions/33527653/babel-6-regeneratorruntime-is-not-defined
          e.preventDefault();

          let image = "";
          if (this.imageRef.files.length > 0) {
            const file = this.imageRef.files[0];
            image = await getBase64(file);
          }

          postCreate({
            image,
            content: this.textRef.value,
          });

          this.textRef.value = "";
          this.imageRef.value = "";
        }}
      >
        <div className="card border-light mb-3">
          <div className="card-header">Crear Publicación</div>
          <div className="card-body">
            <textarea
              ref={(ref) => (this.textRef = ref)}
              placeholder="¿Qué estás pensando?"
              className="form-control nooutline"
            />

            <label htmlFor="photoUpload" className="btn btn-secondary m-0 ml-2 mr-2">
              Foto
            </label>

            <input
              ref={(ref) => (this.imageRef = ref)}
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
