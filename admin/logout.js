  src="https://esm.sh/@supabase/supabase-js@2"

  // 🔑 Configuração do Supabase
  const URL_SUPABASE = 'https://ulxbfffiidjlartupase.supabase.co';
  const KEY_SUPABASE = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVseGJmZmZpaWRqbGFydHVwYXNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcwMDg5OTYsImV4cCI6MjA3MjU4NDk5Nn0.f3-wyXvWJtYR12sWD8bZNW0rFxmz-xq0BT8yuc8boWQ';
  const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

  // === Função de logout ===
  async function fazerLogout() {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        alert("❌ Erro ao sair: " + error.message);
        return;
      }

      alert("✅ Logout realizado com sucesso!");
      // Redireciona para a tela de login
      window.location.href = "../cadastro/login.html";
    } catch (e) {
      console.error("Erro inesperado no logout:", e);
      alert("❌ Ocorreu um erro ao tentar sair.");
    }
  }

  // Exemplo: associar a um botão
  document.addEventListener("DOMContentLoaded", () => {
    const botao = document.getElementById("logoutBtn");
    if (botao) {
      botao.addEventListener("click", fazerLogout);
    }
  });

