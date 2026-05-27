import { NextResponse } from 'next/server'

// Esta variável fica na memória do servidor enquanto o app estiver rodando
// Começa com os agendamentos fictícios que você já tinha
let bancoDeDadosNaMemoria = [
  {
    id: 101,
    status: 'confirmado',
    data: 'Hoje, 26 de Maio',
    horario: '14:00',
    pet: { nome: 'Thor', raca: 'Golden Retriever', porte: 'Grande' },
    servico: { nome: 'Banho Completo', preco: 'R$ 60', duracao: '1h30', cor: '#e6f7f1', corDestaque: '#1a9e75' }
  }
]

// 1. Rota para BUSCAR os agendamentos (GET)
export async function GET() {
  return NextResponse.json(bancoDeDadosNaMemoria)
}

// 2. Rota para SALVAR um novo agendamento (POST)
export async function POST(request: Request) {
  try {
    // Captura os dados enviados pelo formulário/tela
    const dadosRecebidos = await request.json()

    // Cria um novo objeto formatado com um ID único
    const novoAgendamento = {
      id: Date.now(), // Gera um ID baseado no milissegundo atual
      status: 'confirmado',
      data: 'Hoje, 26 de Maio', // Aqui você pode dinamicizar depois
      horario: dadosRecebidos.horario,
      pet: { nome: 'Thor', raca: 'Golden Retriever', porte: 'Grande' }, // Dados do pet fixos por enquanto
      servico: dadosRecebidos.servico // Objeto do serviço selecionado
    }

    // "Joga" o novo agendamento dentro da nossa lista
    bancoDeDadosNaMemoria.unshift(novoAgendamento) // unshift adiciona no início da lista

    // Retorna uma resposta de sucesso
    return NextResponse.json({ mensagem: 'Agendamento salvo com sucesso!', agendamento: novoAgendamento }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ erro: 'Erro ao salvar agendamento' }, { status: 500 })
  }
}