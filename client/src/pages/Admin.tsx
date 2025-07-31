import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ContactRequest } from "@shared/schema";

const Admin = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: contacts, isLoading } = useQuery({
    queryKey: ['/api/contact-requests'],
    queryFn: async () => {
      const response = await fetch('/api/contact-requests');
      if (!response.ok) throw new Error('Error fetching contacts');
      return response.json() as Promise<ContactRequest[]>;
    },
  });

  const updateStatusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: number; status: string }) => {
      const response = await fetch(`/api/contact-requests/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      if (!response.ok) throw new Error('Error updating status');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/contact-requests'] });
      toast({
        title: "Estado actualizado",
        description: "El estado del contacto se ha actualizado correctamente.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "No se pudo actualizar el estado del contacto.",
        variant: "destructive",
      });
    },
  });

  const getStatusBadge = (status: string) => {
    const variants = {
      pending: "bg-yellow-100 text-yellow-800",
      contacted: "bg-blue-100 text-blue-800",
      completed: "bg-green-100 text-green-800"
    };
    return variants[status as keyof typeof variants] || variants.pending;
  };

  const getSourceBadge = (source: string) => {
    return source === "whatsapp" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800";
  };

  if (isLoading) {
    return (
      <div className="container mx-auto p-6">
        <div className="text-center">Cargando contactos...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Panel de Administración</h1>
        <p className="text-gray-600">Gestión de contactos y solicitudes</p>
      </div>

      <div className="grid gap-6">
        {contacts?.map((contact) => (
          <Card key={contact.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{contact.name}</CardTitle>
                  <CardDescription>
                    {contact.email && `${contact.email} • `}
                    {contact.phone}
                    {contact.city && ` • ${contact.city}`}
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Badge className={getSourceBadge(contact.source)}>
                    {contact.source === "whatsapp" ? "WhatsApp" : "Web"}
                  </Badge>
                  <Badge className={getStatusBadge(contact.status)}>
                    {contact.status === "pending" ? "Pendiente" : 
                     contact.status === "contacted" ? "Contactado" : "Completado"}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-gray-700 mb-1">Servicio solicitado:</h4>
                  <p className="text-gray-900">{contact.service}</p>
                </div>
                
                {contact.message && (
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-1">Mensaje:</h4>
                    <p className="text-gray-900 text-sm bg-gray-50 p-3 rounded">{contact.message}</p>
                  </div>
                )}

                <div className="flex justify-between items-center pt-4 border-t">
                  <p className="text-xs text-gray-500">
                    Recibido: {new Date(contact.createdAt).toLocaleString('es-ES')}
                  </p>
                  
                  <div className="flex items-center gap-2">
                    <Select
                      value={contact.status}
                      onValueChange={(status) => updateStatusMutation.mutate({ id: contact.id, status })}
                    >
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pendiente</SelectItem>
                        <SelectItem value="contacted">Contactado</SelectItem>
                        <SelectItem value="completed">Completado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {contacts?.length === 0 && (
        <Card>
          <CardContent className="text-center py-8">
            <p className="text-gray-500">No hay contactos registrados aún.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Admin;