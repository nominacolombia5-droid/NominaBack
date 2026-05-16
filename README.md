# ⚙️ NominaPro Backend

Backend desarrollado con Node.js y Express para el sistema de nómina colombiana **NominaPro**.  
La API permite realizar cálculos de nómina, aportes empresariales y deducciones salariales según la legislación laboral colombiana.

---

# 🚀 Tecnologías utilizadas

- Node.js
- Express.js
- JavaScript
- CORS
- Dotenv
- Render (despliegue)

---

# ✨ Funcionalidades principales

## 🏢 Cálculos empresariales

La API calcula automáticamente:

- Salud empresarial
- Pensión empresarial
- ARL
- Caja de compensación
- ICBF
- SENA
- Prima de servicios
- Cesantías
- Intereses de cesantías
- Vacaciones
- Costo total de la empresa

## 👨‍💼 Cálculos para empleados

La API permite calcular:

- Descuento de salud
- Descuento de pensión
- Ingreso neto
- Honorarios
- Aportes independientes
- Salario neto

## 📄 Tipos de contrato soportados

- Contrato a término fijo
- Contrato indefinido
- Contrato de prestación de servicios

---

# 📁 Estructura principal

```txt
src/
 ├── index.js
 ├── routes/
 ├── controllers/
 ├── services/
 └── utils/
```

---

# ⚙️ Instalación del proyecto

Clonar repositorio:

```bash
git clone https://github.com/nominacolombia5-droid/NominaBack.git
```

Ingresar al proyecto:

```bash
cd NominaBack
```

Instalar dependencias:

```bash
npm install
```

---

# ▶️ Ejecutar servidor

```bash
npm start
```

Servidor local:

```txt
http://localhost:3000
```

---

# 🌐 Variables de entorno

Crear archivo `.env`

```env
PORT=3000
FRONTEND_URL=http://localhost:4200
```

---

# 🌍 Despliegue

Backend desplegado en:

- Render

Frontend conectado desde:

- Vercel

---

# 🔗 API pública

```txt
https://nominaback.onrender.com
```

---

# 👨‍💻 Desarrolladores

Proyecto desarrollado por:

- Jose Cabrera
- Anyeli Jaramillo
- Danna Lagos

---

# 📌 Estado del proyecto

✅ API funcional  
✅ Desplegado en producción  
✅ Conexión Frontend + Backend  
✅ Responsive y optimizado
