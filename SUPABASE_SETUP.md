# Configuración de Supabase

## Pasos para configurar Supabase

### 1. Crear proyecto en Supabase
1. Ve a [Supabase Dashboard](https://supabase.com/dashboard/projects)
2. Crea un nuevo proyecto
3. Elige tu región preferida (Europa recomendada para España)
4. Configura tu contraseña de base de datos

### 2. Obtener la URL de conexión
1. En tu proyecto de Supabase, ve a **Settings** → **Database**
2. Busca la sección **Connection string** 
3. Selecciona **Transaction pooler** (recomendado para production)
4. Copia la URI que se ve así:
   ```
   postgresql://postgres.[project-id]:[password]@aws-0-eu-west-1.pooler.supabase.com:6543/postgres
   ```
5. Reemplaza `[password]` con la contraseña que configuraste

### 3. Configurar en Replit
1. En tu proyecto de Replit, ve a **Secrets** (icono de llave)
2. Actualiza o crea la variable `DATABASE_URL` con tu URL de Supabase
3. Guarda los cambios

### 4. Ejecutar migraciones
```bash
npm run db:push
```

## Características de Supabase incluidas

✅ **Connection Pooling**: Optimizado para aplicaciones serverless
✅ **Auto-scaling**: Escalado automático según demanda  
✅ **Backups**: Copias de seguridad automáticas diarias
✅ **SSL**: Conexiones seguras por defecto
✅ **Geographic distribution**: CDN global para baja latencia
✅ **Real-time**: Capacidades real-time disponibles
✅ **Dashboard**: Interfaz web para gestión de datos

## Ventajas sobre PostgreSQL local

- **Escalabilidad**: Auto-escalado según tráfico
- **Disponibilidad**: 99.9% uptime garantizado
- **Seguridad**: Gestión automática de parches y seguridad
- **Backups**: Copias automáticas sin configuración
- **Monitoring**: Métricas y alertas integradas
- **Edge Functions**: Posibilidad de funciones serverless

## Próximos pasos opcionales

1. **Real-time subscriptions**: Para actualizaciones en tiempo real
2. **Row Level Security**: Para seguridad granular
3. **Edge Functions**: Para lógica serverless
4. **Storage**: Para archivos y imágenes
5. **Auth**: Sistema de autenticación completo