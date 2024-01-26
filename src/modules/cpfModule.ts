// cpfModule.ts
export function normalizeCPF(cpf: string): string {
    return cpf.replace(/[^\d]/g, '');
  }
  
  export function isValidCPF(cpf: string): boolean {
    const cpfRegex = /^[0-9]{11}$/;
    return cpfRegex.test(cpf);
  }
  