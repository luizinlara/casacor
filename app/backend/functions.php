<?php

class CasaCor
{
    const ENV = '.env';
    private $conn;
    public $jsonGaleria = [];

    /**
     * @throws Exception
     */
    public function __construct()
    {
        

        $this->conn = new mysqli(
            'casacor-database',
            'casacor',
            'casacor',
            'casacor',
            '3307'
        );
        if ($this->conn->connect_error) throw new Exception("Erro de conexão: " . $this->conn->connect_error);
    }

    /**
     * @return $this
     */

    public function galeria()
    {
        $sql = "SELECT * FROM galeria ORDER BY id DESC LIMIT 5";
        $result = $this->conn->query($sql);
        if ($result && $result->num_rows > 0) {
            $projetos = [];
            while ($row = $result->fetch_assoc()) {
                $projetos[] = $row;
            }
            $this->jsonGaleria = $projetos;
        }
        return $this;
    }

    /**
     * @param array $request
     * @return bool
     * @throws Exception
     */
    public function cadastrar(array $request)
    {
        $sql = "INSERT INTO galeria (nome, cargo, imagem1, imagem2, imagem3) 
                VALUES (?, ?, ?, ?, ?)";
        $stmt = $this->conn->prepare($sql);

        if ($stmt === false) {
            throw new Exception("Erro na preparação da consulta: " . $this->conn->error);
        }

        $request['name'] = ucwords(strtolower($request['name']));
        $request['empresa'] = ucwords(strtolower($request['empresa']));
        $stmt->bind_param("sssss",
            $request['name'],
            $request['empresa'],
            $request['cripImage1'],
            $request['cripImage2'],
            $request['cripImage3']);

        return $stmt->execute();
    }

    public function fecharConexao()
    {
        $this->conn->close();
        return $this;
    }
}