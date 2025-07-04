import React, { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaCliente from "./listaCliente";
import Dashboard from "./dashboard";
import Footer from "./footer";

export type Cliente = {
    id: number;
    nome: string;
    sobrenome: string;
    telefone: string;
    email: string;
    cidade: string;
    ativo: boolean;
}

const Roteador: React.FC = () => {
    const [tela, setTela] = useState<string>('Dashboard');
    const [clientes, setClientes] = useState<Cliente[]>([
        { id: 1, nome: "João", sobrenome: "Silva", telefone: "(11) 99999-9999", email: "joao@email.com", cidade: "São Paulo", ativo: true },
        { id: 2, nome: "Maria", sobrenome: "Santos", telefone: "(11) 88888-8888", email: "maria@email.com", cidade: "Rio de Janeiro", ativo: true },
        { id: 3, nome: "Pedro", sobrenome: "Oliveira", telefone: "(11) 77777-7777", email: "pedro@email.com", cidade: "Belo Horizonte", ativo: false },
        { id: 4, nome: "Ana", sobrenome: "Costa", telefone: "(11) 66666-6666", email: "ana@email.com", cidade: "São Paulo", ativo: true },
        { id: 5, nome: "Carlos", sobrenome: "Ferreira", telefone: "(11) 55555-5555", email: "carlos@email.com", cidade: "Brasília", ativo: true },
        { id: 6, nome: "Beatriz", sobrenome: "Lima", telefone: "(11) 44444-4444", email: "beatriz@email.com", cidade: "Salvador", ativo: false },
        { id: 7, nome: "Rafael", sobrenome: "Mendes", telefone: "(11) 33333-3333", email: "rafael@email.com", cidade: "São Paulo", ativo: true },
        { id: 8, nome: "Lucia", sobrenome: "Rocha", telefone: "(11) 22222-2222", email: "lucia@email.com", cidade: "Rio de Janeiro", ativo: true }
    ]);

    const selecionarView = (novaTela: string, evento: Event) => {
        evento.preventDefault();
        console.log(novaTela);
        setTela(novaTela);
    };

    const adicionarCliente = (novoCliente: Omit<Cliente, 'id'>) => {
        const id = Math.max(...clientes.map(c => c.id)) + 1;
        const clienteComId = { ...novoCliente, id, ativo: true };
        setClientes(prevClientes => [...prevClientes, clienteComId]);
        setTela('Clientes'); // Navegar para a lista após cadastrar
    };

    const renderRelatorios = () => {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <h4 className="center-align">Relatórios</h4>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col s12 m6 l4">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title">
                                    <i className="material-icons left">people</i>
                                    Total de Clientes
                                </span>
                                <h3 className="center-align purple-text">150</h3>
                                <p className="center-align grey-text">Clientes cadastrados</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col s12 m6 l4">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title">
                                    <i className="material-icons left">trending_up</i>
                                    Novos Este Mês
                                </span>
                                <h3 className="center-align green-text">25</h3>
                                <p className="center-align grey-text">Cadastros recentes</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col s12 m6 l4">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title">
                                    <i className="material-icons left">location_city</i>
                                    Cidades
                                </span>
                                <h3 className="center-align blue-text">12</h3>
                                <p className="center-align grey-text">Cidades atendidas</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col s12">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title">Relatórios Disponíveis</span>
                                <div className="collection">
                                    <a className="collection-item waves-effect">
                                        <i className="material-icons left">assessment</i>
                                        Relatório Geral de Clientes
                                        <span className="secondary-content">
                                            <i className="material-icons">file_download</i>
                                        </span>
                                    </a>
                                    <a className="collection-item waves-effect">
                                        <i className="material-icons left">timeline</i>
                                        Clientes por Período
                                        <span className="secondary-content">
                                            <i className="material-icons">file_download</i>
                                        </span>
                                    </a>
                                    <a className="collection-item waves-effect">
                                        <i className="material-icons left">place</i>
                                        Clientes por Localização
                                        <span className="secondary-content">
                                            <i className="material-icons">file_download</i>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const renderConfiguracoes = () => {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <h4 className="center-align">Configurações</h4>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col s12 m6">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title">
                                    <i className="material-icons left">palette</i>
                                    Aparência
                                </span>
                                <div className="row">
                                    <div className="col s12">
                                        <label>Tema da Aplicação</label>
                                        <select className="browser-default">
                                            <option value="" disabled selected>Escolha um tema</option>
                                            <option value="purple">Roxo (Atual)</option>
                                            <option value="blue">Azul</option>
                                            <option value="green">Verde</option>
                                            <option value="red">Vermelho</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col s12 m6">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title">
                                    <i className="material-icons left">storage</i>
                                    Dados
                                </span>
                                <div className="row">
                                    <div className="col s12">
                                        <a className="btn waves-effect waves-light purple lighten-4 purple-text text-darken-3 full-width">
                                            <i className="material-icons left">backup</i>
                                            Fazer Backup
                                        </a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s12">
                                        <a className="btn waves-effect waves-light orange lighten-4 orange-text text-darken-3 full-width">
                                            <i className="material-icons left">restore</i>
                                            Restaurar Backup
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col s12">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title">
                                    <i className="material-icons left">info</i>
                                    Informações do Sistema
                                </span>
                                <div className="row">
                                    <div className="col s12 m6">
                                        <p><strong>Versão:</strong> 1.0.0</p>
                                        <p><strong>Desenvolvido por:</strong> Equipe WB</p>
                                    </div>
                                    <div className="col s12 m6">
                                        <p><strong>Última atualização:</strong> 27/06/2025</p>
                                        <p><strong>Tecnologias:</strong> React + MaterializeCSS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const barraNavegacao = <BarraNavegacao 
        seletorView={selecionarView} 
        tema="purple lighten-4" 
        botoes={['Dashboard', 'Clientes', 'Cadastrar Cliente', 'Relatórios', 'Configurações']} 
    />;
    
    if (tela === 'Dashboard') {
        return (
            <>
                {barraNavegacao}
                <Dashboard tema="purple lighten-4" />
                <Footer />
            </>
        );
    } else if (tela === 'Clientes') {
        return (
            <>
                {barraNavegacao}
                <ListaCliente tema="purple lighten-4" clientes={clientes} setClientes={setClientes} />
                <Footer />
            </>
        );
    } else if (tela === 'Cadastrar Cliente') {
        return (
            <>
                {barraNavegacao}
                <FormularioCadastroCliente tema="purple lighten-4" onAdicionarCliente={adicionarCliente} />
                <Footer />
            </>
        );
    } else if (tela === 'Relatórios') {
        return (
            <>
                {barraNavegacao}
                {renderRelatorios()}
                <Footer />
            </>
        );
    } else if (tela === 'Configurações') {
        return (
            <>
                {barraNavegacao}
                {renderConfiguracoes()}
                <Footer />
            </>
        );
    } else {
        return (
            <>
                {barraNavegacao}
                <Dashboard tema="purple lighten-4" />
                <Footer />
            </>
        );
    }
};

export default Roteador;