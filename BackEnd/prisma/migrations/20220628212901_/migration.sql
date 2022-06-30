-- CreateTable
CREATE TABLE "Admin" (
    "id_admin" SERIAL NOT NULL,
    "user" VARCHAR(16) NOT NULL,
    "nome" VARCHAR(24) NOT NULL
);

-- CreateTable
CREATE TABLE "Terminal" (
    "id_terminal" SERIAL NOT NULL,
    "user" VARCHAR(16) NOT NULL,
    "descricao" VARCHAR(255) NOT NULL,
    "endereco" VARCHAR(120) NOT NULL,
    "admin" INTEGER NOT NULL,
    "password" VARCHAR(16) NOT NULL,

    CONSTRAINT "Terminal_pkey" PRIMARY KEY ("id_terminal")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id" SERIAL NOT NULL,
    "cnpj" INTEGER NOT NULL,
    "nome" VARCHAR(60) NOT NULL,
    "contacto" INTEGER NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Encomenda" (
    "id_encomenda" SERIAL NOT NULL,
    "descricao" VARCHAR(255) NOT NULL,
    "endereco" VARCHAR(120) NOT NULL,
    "id_cliente" INTEGER NOT NULL,
    "data_emissao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "entregue" BOOLEAN NOT NULL,

    CONSTRAINT "Encomenda_pkey" PRIMARY KEY ("id_encomenda")
);

-- CreateTable
CREATE TABLE "Status" (
    "terminal" INTEGER NOT NULL,
    "encomenda" INTEGER NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "descricao" VARCHAR(32) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_id_admin_key" ON "Admin"("id_admin");

-- CreateIndex
CREATE UNIQUE INDEX "Terminal_id_terminal_key" ON "Terminal"("id_terminal");

-- CreateIndex
CREATE UNIQUE INDEX "Terminal_admin_key" ON "Terminal"("admin");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_id_key" ON "Cliente"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Status_data_key" ON "Status"("data");

-- AddForeignKey
ALTER TABLE "Terminal" ADD CONSTRAINT "Terminal_admin_fkey" FOREIGN KEY ("admin") REFERENCES "Admin"("id_admin") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Encomenda" ADD CONSTRAINT "Encomenda_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Status" ADD CONSTRAINT "Status_terminal_fkey" FOREIGN KEY ("terminal") REFERENCES "Terminal"("id_terminal") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Status" ADD CONSTRAINT "Status_encomenda_fkey" FOREIGN KEY ("encomenda") REFERENCES "Encomenda"("id_encomenda") ON DELETE RESTRICT ON UPDATE CASCADE;
