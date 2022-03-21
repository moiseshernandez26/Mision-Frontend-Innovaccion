<template>
  <section class="wrapper_form">
    <div class="card-form">
      <div class="col-form">
        <div class="wrapper_title_form">
          <h2>Pedido</h2>
        </div>
        <form action="#" @submit="handleSubmit">
          <div class="input-group">
            <label for="nombre">Nombre:</label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              class="input-control"
              v-model="nombre"
              @change="handleChangeNombre"
            />
          </div>
          <div class="input-group">
            <label for="telefono">Teléfono:</label>
            <input
              type="tel"
              name="telefono"
              id="telefono"
              class="input-control"
                v-model="telefono"
                @change="handleChangeTelefono"
            />
          </div>
          <div class="input-group">
            <label for="correo">Correo Electrónico:</label>
            <input
              type="email"
              name="correo"
              id="correo"
              class="input-control"
                v-model="correo"
                @change="handleChangeCorreo"
            />
          </div>
          <div class="input-group">
            <label for="descripcion">Descripción general del pastel:</label>
            <textarea name="descripcion" id="descripcion" @change="handleChangeDescripcion"></textarea>
          </div>
          <div class="wrapper_title_form">
            <h2>Sabores:</h2>
          </div>
          <div class="list-check">
            <div class="group-check">
              <input
                type="checkbox"
                name="sabores[]"
                value="chocolate"
                class="check"
                id="chocolate"
                @change="handleChangeSabores"
              />
              <span class="label-check"> Chocolate </span>
            </div>
            <div class="group-check">
              <input
                type="checkbox"
                name="sabores[]"
                value="vainilla"
                class="check"
                @change="handleChangeSabores"
                
              />
              <span class="label-check"> Vainilla </span>
            </div>
            <div class="group-check">
              <input
                type="checkbox"
                name="sabores[]"
                value="fresa"
                class="check"
                @change="handleChangeSabores"
                
              />
              <span class="label-check"> Fresa </span>
            </div>
          </div>

          <div class="wrapper_title_form">
            <h2>Adornos:</h2>
          </div>
          <div class="list-check">
            <div class="group-check">
              <input
                type="checkbox"
                name="adornos[]"
                value="uvas"
                class="check"
                id="uvas"
                @change="handleChangeAdornos"
              />
              <span class="label-check"> Uvas </span>
            </div>
            <div class="group-check">
              <input
                type="checkbox"
                name="adornos[]"
                value="Naranjas"
                class="check"
                @change="handleChangeAdornos"

              />
              <span class="label-check"> Naranjas </span>
            </div>
            <div class="group-check">
              <input
                type="checkbox"
                name="adornos[]"
                value="Dulces"
                class="check"
                @change="handleChangeAdornos"

              />
              <span class="label-check"> Dulces </span>
            </div>
          </div>
          <div class="wrapper_btn_form">
            <button type="submit" class="btn-submit">Enviar</button>
          </div>
        </form>
      </div>
      <div class="col-img">
        <img src="@/assets/img/form.jpg" alt="img form" class="img-form" />
      </div>
    </div>
  </section>
</template>

<script>

    export default {
        name: "FormComponent",
        data() {
            return {
                nombre: "",
                telefono: "",
                correo: "",
                descripcion: "",
                adornos: [],
                sabores: [],
            };
        },
        methods: {
            handleChangeNombre(e) {
                this.nombre = e.target.value;
            },
            handleChangeTelefono(e) {
                this.telefono = e.target.value;
            },
            handleChangeCorreo(e) {
                this.correo = e.target.value;
            },
            handleChangeDescripcion(e) {
                this.descripcion = e.target.value;
            },
            handleChangeAdornos(e) {
                const {checked, value} = e.target;
                if (checked) {
                    this.adornos.push(value);
                } else {
                    this.adornos = this.adornos.filter(adorno => adorno !== value);
                }
            },
            handleChangeSabores(e) {
                const {checked, value} = e.target;
                if (checked) {
                    this.sabores.push(value);
                } else {
                    this.sabores = this.sabores.filter(adorno => adorno !== value);
                }

            },
            handleSubmit(e) {
                e.preventDefault();
                const data = {
                    nombre: this.nombre,
                    telefono: this.telefono,
                    correo: this.correo,
                    descripcion: this.descripcion,
                    adornos: this.adornos,
                    sabores: this.sabores,
                };

                // Send state
                this.$store.commit('setPedidos', data); 
                alert("ENVIADO");
            },  
        },
    };
</script>
