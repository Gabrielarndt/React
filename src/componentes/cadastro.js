export default function Cadastro() {
    return (
        <div className="mt-4">
            <h1 className="text-center">Cadastro de Contatos</h1>

            <div className="mb-2">
                <label
                    className="form-label"
                    for="nome"
                >Nome</label>
                <input type="text"
                    placeholder="Informe nome"
                    className="form-control"
                    id="nome"
                />
            </div>

            <div className="mb-2">
                <label
                    className="form-label"
                    for="email"
                >Email</label>
                <input type="text"
                    placeholder="Informe email"
                    className="form-control"
                    id="email"
                />
            </div>

            <div className="mb-2">
                <label
                    className="form-label"
                    for="fone"
                >Fone</label>
                <input type="text"
                    placeholder="Informe fone"
                    className="form-control"
                    id="fone"
                />
            </div>
            <div className="mt-3 d-flex justify-content-around">
                <button className="btn btn-outline-primary">Gravar</button>

                <button className="btn btn-outline-danger">Cancelar</button>
            </div>

        </div>
    )
}