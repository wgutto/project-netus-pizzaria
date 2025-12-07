#  Net'us Pizzaria

Plataforma de pedidos online para pizzaria com integração WhatsApp. Usuários escolhem pizzas, adicionam ao carrinho e finalizam o pedido enviando automáticamente os dados para o WhatsApp do lojista.

##  Links
-  **Site:** https://project-netus-pizzaria.vercel.app
-  **Código:** https://github.com/wgutto/project-netus-pizzaria

##  Tecnologias
- **Next.js 14** - Framework React com SSR/SSG
- **React 18** - UI components
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Hook Form + Zod** - Validação de formulários
- **Radix UI** - Componentes acessíveis
- **Sonner** - Notificações toast
- **next-themes** - Dark/Light mode

##  Principais Funcionalidades
-  **Carrinho** com cálculo automático de subtotal + entrega
-  **Integração WhatsApp** com mensagem formatada do pedido
-  **Dark/Light mode** com persistência
-  **Design responsivo** mobile-first
-  **Validação em tempo real** dos formulários

##  Fluxo do Usuário
1. Visualiza catálogo de pizzas
2. Seleciona tamanho e adiciona ao carrinho
3. Ajusta quantidades no carrinho
4. Clica "Finalizar Pedido"
5. Preenche nome e endereço
6. Enviar para WhatsApp (abre chat com pedido formatado)