export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'add' : IDL.Func([IDL.Float64, IDL.Float64], [IDL.Float64], ['query']),
    'divide' : IDL.Func(
        [IDL.Float64, IDL.Float64],
        [IDL.Opt(IDL.Float64)],
        ['query'],
      ),
    'multiply' : IDL.Func([IDL.Float64, IDL.Float64], [IDL.Float64], ['query']),
    'subtract' : IDL.Func([IDL.Float64, IDL.Float64], [IDL.Float64], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
