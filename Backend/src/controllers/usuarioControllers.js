import Usuario from "../models/usuarioModel.js";
import { z } from "zod";


const createSchema = z.object({
    email: z.string({
        invalid_type_error: "O email é obrigatório em texto",
        required_error: "Titulo é obrigatório"
    }),
});


export const create = async (req, res) => {
    const createValidation = createSchema.safeParse(request.body);
    if (!createValidation.success) {
        return response.status(400).json(createValidation.error);
    }

    const {} = createValidation.data;

try {
    const { email, senha, confirma_senha} = req.body

    const usuario = await Usuario.create({
        email, 
        senha,
        confirma_senha
    });

    res.status(201).json(usuario);
    
} catch (error) {
    console.error("Erro ao cadastrar usuario:", error);
        res.status(500).json({ error: "Erro ao cadastrar usuario", details: error.message });
}
};