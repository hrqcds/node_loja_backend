
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Compra
 * 
 */
export type Compra = {
  id: number
  total: number
  tipo_pagamento: Pagamento
  status: Status
  data_criacao: Date
}

/**
 * Model Produto
 * 
 */
export type Produto = {
  id: number
  nome: string
  descricao: string
  preco: number
  data_criacao: Date
  data_atualizacao: Date
}

/**
 * Model ListaDeProdutos
 * 
 */
export type ListaDeProdutos = {
  compraId: number
  produtoId: number
  adicionado_em: Date
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const Pagamento: {
  DEBITO: 'DEBITO',
  CREDITO: 'CREDITO',
  DINHEIRO: 'DINHEIRO'
};

export type Pagamento = (typeof Pagamento)[keyof typeof Pagamento]


export const Status: {
  AGUARDANDO: 'AGUARDANDO',
  CONCLUIDO: 'CONCLUIDO'
};

export type Status = (typeof Status)[keyof typeof Status]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Compras
 * const compras = await prisma.compra.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Compras
   * const compras = await prisma.compra.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.compra`: Exposes CRUD operations for the **Compra** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Compras
    * const compras = await prisma.compra.findMany()
    * ```
    */
  get compra(): Prisma.CompraDelegate<GlobalReject>;

  /**
   * `prisma.produto`: Exposes CRUD operations for the **Produto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produtos
    * const produtos = await prisma.produto.findMany()
    * ```
    */
  get produto(): Prisma.ProdutoDelegate<GlobalReject>;

  /**
   * `prisma.listaDeProdutos`: Exposes CRUD operations for the **ListaDeProdutos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ListaDeProdutos
    * const listaDeProdutos = await prisma.listaDeProdutos.findMany()
    * ```
    */
  get listaDeProdutos(): Prisma.ListaDeProdutosDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 3.12.0
   * Query Engine version: 22b822189f46ef0dc5c5b503368d1bee01213980
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Compra: 'Compra',
    Produto: 'Produto',
    ListaDeProdutos: 'ListaDeProdutos'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CompraCountOutputType
   */


  export type CompraCountOutputType = {
    listaDeProdutos: number
  }

  export type CompraCountOutputTypeSelect = {
    listaDeProdutos?: boolean
  }

  export type CompraCountOutputTypeGetPayload<
    S extends boolean | null | undefined | CompraCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? CompraCountOutputType
    : S extends undefined
    ? never
    : S extends CompraCountOutputTypeArgs
    ?'include' extends U
    ? CompraCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof CompraCountOutputType ? CompraCountOutputType[P] : never
  } 
    : CompraCountOutputType
  : CompraCountOutputType




  // Custom InputTypes

  /**
   * CompraCountOutputType without action
   */
  export type CompraCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CompraCountOutputType
     * 
    **/
    select?: CompraCountOutputTypeSelect | null
  }



  /**
   * Count Type ProdutoCountOutputType
   */


  export type ProdutoCountOutputType = {
    listaDeProdutos: number
  }

  export type ProdutoCountOutputTypeSelect = {
    listaDeProdutos?: boolean
  }

  export type ProdutoCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ProdutoCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ProdutoCountOutputType
    : S extends undefined
    ? never
    : S extends ProdutoCountOutputTypeArgs
    ?'include' extends U
    ? ProdutoCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ProdutoCountOutputType ? ProdutoCountOutputType[P] : never
  } 
    : ProdutoCountOutputType
  : ProdutoCountOutputType




  // Custom InputTypes

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProdutoCountOutputType
     * 
    **/
    select?: ProdutoCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Compra
   */


  export type AggregateCompra = {
    _count: CompraCountAggregateOutputType | null
    _avg: CompraAvgAggregateOutputType | null
    _sum: CompraSumAggregateOutputType | null
    _min: CompraMinAggregateOutputType | null
    _max: CompraMaxAggregateOutputType | null
  }

  export type CompraAvgAggregateOutputType = {
    id: number | null
    total: number | null
  }

  export type CompraSumAggregateOutputType = {
    id: number | null
    total: number | null
  }

  export type CompraMinAggregateOutputType = {
    id: number | null
    total: number | null
    tipo_pagamento: Pagamento | null
    status: Status | null
    data_criacao: Date | null
  }

  export type CompraMaxAggregateOutputType = {
    id: number | null
    total: number | null
    tipo_pagamento: Pagamento | null
    status: Status | null
    data_criacao: Date | null
  }

  export type CompraCountAggregateOutputType = {
    id: number
    total: number
    tipo_pagamento: number
    status: number
    data_criacao: number
    _all: number
  }


  export type CompraAvgAggregateInputType = {
    id?: true
    total?: true
  }

  export type CompraSumAggregateInputType = {
    id?: true
    total?: true
  }

  export type CompraMinAggregateInputType = {
    id?: true
    total?: true
    tipo_pagamento?: true
    status?: true
    data_criacao?: true
  }

  export type CompraMaxAggregateInputType = {
    id?: true
    total?: true
    tipo_pagamento?: true
    status?: true
    data_criacao?: true
  }

  export type CompraCountAggregateInputType = {
    id?: true
    total?: true
    tipo_pagamento?: true
    status?: true
    data_criacao?: true
    _all?: true
  }

  export type CompraAggregateArgs = {
    /**
     * Filter which Compra to aggregate.
     * 
    **/
    where?: CompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compras to fetch.
     * 
    **/
    orderBy?: Enumerable<CompraOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compras from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compras.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Compras
    **/
    _count?: true | CompraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompraMaxAggregateInputType
  }

  export type GetCompraAggregateType<T extends CompraAggregateArgs> = {
        [P in keyof T & keyof AggregateCompra]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompra[P]>
      : GetScalarType<T[P], AggregateCompra[P]>
  }




  export type CompraGroupByArgs = {
    where?: CompraWhereInput
    orderBy?: Enumerable<CompraOrderByWithAggregationInput>
    by: Array<CompraScalarFieldEnum>
    having?: CompraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompraCountAggregateInputType | true
    _avg?: CompraAvgAggregateInputType
    _sum?: CompraSumAggregateInputType
    _min?: CompraMinAggregateInputType
    _max?: CompraMaxAggregateInputType
  }


  export type CompraGroupByOutputType = {
    id: number
    total: number
    tipo_pagamento: Pagamento
    status: Status
    data_criacao: Date
    _count: CompraCountAggregateOutputType | null
    _avg: CompraAvgAggregateOutputType | null
    _sum: CompraSumAggregateOutputType | null
    _min: CompraMinAggregateOutputType | null
    _max: CompraMaxAggregateOutputType | null
  }

  type GetCompraGroupByPayload<T extends CompraGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CompraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompraGroupByOutputType[P]>
            : GetScalarType<T[P], CompraGroupByOutputType[P]>
        }
      >
    >


  export type CompraSelect = {
    id?: boolean
    total?: boolean
    tipo_pagamento?: boolean
    status?: boolean
    data_criacao?: boolean
    listaDeProdutos?: boolean | ListaDeProdutosFindManyArgs
    _count?: boolean | CompraCountOutputTypeArgs
  }

  export type CompraInclude = {
    listaDeProdutos?: boolean | ListaDeProdutosFindManyArgs
    _count?: boolean | CompraCountOutputTypeArgs
  }

  export type CompraGetPayload<
    S extends boolean | null | undefined | CompraArgs,
    U = keyof S
      > = S extends true
        ? Compra
    : S extends undefined
    ? never
    : S extends CompraArgs | CompraFindManyArgs
    ?'include' extends U
    ? Compra  & {
    [P in TrueKeys<S['include']>]:
        P extends 'listaDeProdutos' ? Array < ListaDeProdutosGetPayload<S['include'][P]>>  :
        P extends '_count' ? CompraCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'listaDeProdutos' ? Array < ListaDeProdutosGetPayload<S['select'][P]>>  :
        P extends '_count' ? CompraCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Compra ? Compra[P] : never
  } 
    : Compra
  : Compra


  type CompraCountArgs = Merge<
    Omit<CompraFindManyArgs, 'select' | 'include'> & {
      select?: CompraCountAggregateInputType | true
    }
  >

  export interface CompraDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Compra that matches the filter.
     * @param {CompraFindUniqueArgs} args - Arguments to find a Compra
     * @example
     * // Get one Compra
     * const compra = await prisma.compra.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CompraFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CompraFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Compra'> extends True ? CheckSelect<T, Prisma__CompraClient<Compra>, Prisma__CompraClient<CompraGetPayload<T>>> : CheckSelect<T, Prisma__CompraClient<Compra | null >, Prisma__CompraClient<CompraGetPayload<T> | null >>

    /**
     * Find the first Compra that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraFindFirstArgs} args - Arguments to find a Compra
     * @example
     * // Get one Compra
     * const compra = await prisma.compra.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CompraFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CompraFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Compra'> extends True ? CheckSelect<T, Prisma__CompraClient<Compra>, Prisma__CompraClient<CompraGetPayload<T>>> : CheckSelect<T, Prisma__CompraClient<Compra | null >, Prisma__CompraClient<CompraGetPayload<T> | null >>

    /**
     * Find zero or more Compras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Compras
     * const compras = await prisma.compra.findMany()
     * 
     * // Get first 10 Compras
     * const compras = await prisma.compra.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const compraWithIdOnly = await prisma.compra.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CompraFindManyArgs>(
      args?: SelectSubset<T, CompraFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Compra>>, PrismaPromise<Array<CompraGetPayload<T>>>>

    /**
     * Create a Compra.
     * @param {CompraCreateArgs} args - Arguments to create a Compra.
     * @example
     * // Create one Compra
     * const Compra = await prisma.compra.create({
     *   data: {
     *     // ... data to create a Compra
     *   }
     * })
     * 
    **/
    create<T extends CompraCreateArgs>(
      args: SelectSubset<T, CompraCreateArgs>
    ): CheckSelect<T, Prisma__CompraClient<Compra>, Prisma__CompraClient<CompraGetPayload<T>>>

    /**
     * Create many Compras.
     *     @param {CompraCreateManyArgs} args - Arguments to create many Compras.
     *     @example
     *     // Create many Compras
     *     const compra = await prisma.compra.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CompraCreateManyArgs>(
      args?: SelectSubset<T, CompraCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Compra.
     * @param {CompraDeleteArgs} args - Arguments to delete one Compra.
     * @example
     * // Delete one Compra
     * const Compra = await prisma.compra.delete({
     *   where: {
     *     // ... filter to delete one Compra
     *   }
     * })
     * 
    **/
    delete<T extends CompraDeleteArgs>(
      args: SelectSubset<T, CompraDeleteArgs>
    ): CheckSelect<T, Prisma__CompraClient<Compra>, Prisma__CompraClient<CompraGetPayload<T>>>

    /**
     * Update one Compra.
     * @param {CompraUpdateArgs} args - Arguments to update one Compra.
     * @example
     * // Update one Compra
     * const compra = await prisma.compra.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CompraUpdateArgs>(
      args: SelectSubset<T, CompraUpdateArgs>
    ): CheckSelect<T, Prisma__CompraClient<Compra>, Prisma__CompraClient<CompraGetPayload<T>>>

    /**
     * Delete zero or more Compras.
     * @param {CompraDeleteManyArgs} args - Arguments to filter Compras to delete.
     * @example
     * // Delete a few Compras
     * const { count } = await prisma.compra.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CompraDeleteManyArgs>(
      args?: SelectSubset<T, CompraDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Compras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Compras
     * const compra = await prisma.compra.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CompraUpdateManyArgs>(
      args: SelectSubset<T, CompraUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Compra.
     * @param {CompraUpsertArgs} args - Arguments to update or create a Compra.
     * @example
     * // Update or create a Compra
     * const compra = await prisma.compra.upsert({
     *   create: {
     *     // ... data to create a Compra
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Compra we want to update
     *   }
     * })
    **/
    upsert<T extends CompraUpsertArgs>(
      args: SelectSubset<T, CompraUpsertArgs>
    ): CheckSelect<T, Prisma__CompraClient<Compra>, Prisma__CompraClient<CompraGetPayload<T>>>

    /**
     * Count the number of Compras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraCountArgs} args - Arguments to filter Compras to count.
     * @example
     * // Count the number of Compras
     * const count = await prisma.compra.count({
     *   where: {
     *     // ... the filter for the Compras we want to count
     *   }
     * })
    **/
    count<T extends CompraCountArgs>(
      args?: Subset<T, CompraCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Compra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompraAggregateArgs>(args: Subset<T, CompraAggregateArgs>): PrismaPromise<GetCompraAggregateType<T>>

    /**
     * Group by Compra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompraGroupByArgs['orderBy'] }
        : { orderBy?: CompraGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompraGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Compra.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CompraClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    listaDeProdutos<T extends ListaDeProdutosFindManyArgs = {}>(args?: Subset<T, ListaDeProdutosFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ListaDeProdutos>>, PrismaPromise<Array<ListaDeProdutosGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Compra findUnique
   */
  export type CompraFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Compra
     * 
    **/
    select?: CompraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompraInclude | null
    /**
     * Throw an Error if a Compra can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Compra to fetch.
     * 
    **/
    where: CompraWhereUniqueInput
  }


  /**
   * Compra findFirst
   */
  export type CompraFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Compra
     * 
    **/
    select?: CompraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompraInclude | null
    /**
     * Throw an Error if a Compra can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Compra to fetch.
     * 
    **/
    where?: CompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compras to fetch.
     * 
    **/
    orderBy?: Enumerable<CompraOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Compras.
     * 
    **/
    cursor?: CompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compras from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compras.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Compras.
     * 
    **/
    distinct?: Enumerable<CompraScalarFieldEnum>
  }


  /**
   * Compra findMany
   */
  export type CompraFindManyArgs = {
    /**
     * Select specific fields to fetch from the Compra
     * 
    **/
    select?: CompraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompraInclude | null
    /**
     * Filter, which Compras to fetch.
     * 
    **/
    where?: CompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compras to fetch.
     * 
    **/
    orderBy?: Enumerable<CompraOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Compras.
     * 
    **/
    cursor?: CompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compras from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compras.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CompraScalarFieldEnum>
  }


  /**
   * Compra create
   */
  export type CompraCreateArgs = {
    /**
     * Select specific fields to fetch from the Compra
     * 
    **/
    select?: CompraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompraInclude | null
    /**
     * The data needed to create a Compra.
     * 
    **/
    data: XOR<CompraCreateInput, CompraUncheckedCreateInput>
  }


  /**
   * Compra createMany
   */
  export type CompraCreateManyArgs = {
    /**
     * The data used to create many Compras.
     * 
    **/
    data: Enumerable<CompraCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Compra update
   */
  export type CompraUpdateArgs = {
    /**
     * Select specific fields to fetch from the Compra
     * 
    **/
    select?: CompraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompraInclude | null
    /**
     * The data needed to update a Compra.
     * 
    **/
    data: XOR<CompraUpdateInput, CompraUncheckedUpdateInput>
    /**
     * Choose, which Compra to update.
     * 
    **/
    where: CompraWhereUniqueInput
  }


  /**
   * Compra updateMany
   */
  export type CompraUpdateManyArgs = {
    /**
     * The data used to update Compras.
     * 
    **/
    data: XOR<CompraUpdateManyMutationInput, CompraUncheckedUpdateManyInput>
    /**
     * Filter which Compras to update
     * 
    **/
    where?: CompraWhereInput
  }


  /**
   * Compra upsert
   */
  export type CompraUpsertArgs = {
    /**
     * Select specific fields to fetch from the Compra
     * 
    **/
    select?: CompraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompraInclude | null
    /**
     * The filter to search for the Compra to update in case it exists.
     * 
    **/
    where: CompraWhereUniqueInput
    /**
     * In case the Compra found by the `where` argument doesn't exist, create a new Compra with this data.
     * 
    **/
    create: XOR<CompraCreateInput, CompraUncheckedCreateInput>
    /**
     * In case the Compra was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CompraUpdateInput, CompraUncheckedUpdateInput>
  }


  /**
   * Compra delete
   */
  export type CompraDeleteArgs = {
    /**
     * Select specific fields to fetch from the Compra
     * 
    **/
    select?: CompraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompraInclude | null
    /**
     * Filter which Compra to delete.
     * 
    **/
    where: CompraWhereUniqueInput
  }


  /**
   * Compra deleteMany
   */
  export type CompraDeleteManyArgs = {
    /**
     * Filter which Compras to delete
     * 
    **/
    where?: CompraWhereInput
  }


  /**
   * Compra without action
   */
  export type CompraArgs = {
    /**
     * Select specific fields to fetch from the Compra
     * 
    **/
    select?: CompraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompraInclude | null
  }



  /**
   * Model Produto
   */


  export type AggregateProduto = {
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  export type ProdutoAvgAggregateOutputType = {
    id: number | null
    preco: number | null
  }

  export type ProdutoSumAggregateOutputType = {
    id: number | null
    preco: number | null
  }

  export type ProdutoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    preco: number | null
    data_criacao: Date | null
    data_atualizacao: Date | null
  }

  export type ProdutoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    preco: number | null
    data_criacao: Date | null
    data_atualizacao: Date | null
  }

  export type ProdutoCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    preco: number
    data_criacao: number
    data_atualizacao: number
    _all: number
  }


  export type ProdutoAvgAggregateInputType = {
    id?: true
    preco?: true
  }

  export type ProdutoSumAggregateInputType = {
    id?: true
    preco?: true
  }

  export type ProdutoMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    preco?: true
    data_criacao?: true
    data_atualizacao?: true
  }

  export type ProdutoMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    preco?: true
    data_criacao?: true
    data_atualizacao?: true
  }

  export type ProdutoCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    preco?: true
    data_criacao?: true
    data_atualizacao?: true
    _all?: true
  }

  export type ProdutoAggregateArgs = {
    /**
     * Filter which Produto to aggregate.
     * 
    **/
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     * 
    **/
    orderBy?: Enumerable<ProdutoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produtos
    **/
    _count?: true | ProdutoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdutoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdutoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutoMaxAggregateInputType
  }

  export type GetProdutoAggregateType<T extends ProdutoAggregateArgs> = {
        [P in keyof T & keyof AggregateProduto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduto[P]>
      : GetScalarType<T[P], AggregateProduto[P]>
  }




  export type ProdutoGroupByArgs = {
    where?: ProdutoWhereInput
    orderBy?: Enumerable<ProdutoOrderByWithAggregationInput>
    by: Array<ProdutoScalarFieldEnum>
    having?: ProdutoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutoCountAggregateInputType | true
    _avg?: ProdutoAvgAggregateInputType
    _sum?: ProdutoSumAggregateInputType
    _min?: ProdutoMinAggregateInputType
    _max?: ProdutoMaxAggregateInputType
  }


  export type ProdutoGroupByOutputType = {
    id: number
    nome: string
    descricao: string
    preco: number
    data_criacao: Date
    data_atualizacao: Date
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  type GetProdutoGroupByPayload<T extends ProdutoGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProdutoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
        }
      >
    >


  export type ProdutoSelect = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    preco?: boolean
    data_criacao?: boolean
    data_atualizacao?: boolean
    listaDeProdutos?: boolean | ListaDeProdutosFindManyArgs
    _count?: boolean | ProdutoCountOutputTypeArgs
  }

  export type ProdutoInclude = {
    listaDeProdutos?: boolean | ListaDeProdutosFindManyArgs
    _count?: boolean | ProdutoCountOutputTypeArgs
  }

  export type ProdutoGetPayload<
    S extends boolean | null | undefined | ProdutoArgs,
    U = keyof S
      > = S extends true
        ? Produto
    : S extends undefined
    ? never
    : S extends ProdutoArgs | ProdutoFindManyArgs
    ?'include' extends U
    ? Produto  & {
    [P in TrueKeys<S['include']>]:
        P extends 'listaDeProdutos' ? Array < ListaDeProdutosGetPayload<S['include'][P]>>  :
        P extends '_count' ? ProdutoCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'listaDeProdutos' ? Array < ListaDeProdutosGetPayload<S['select'][P]>>  :
        P extends '_count' ? ProdutoCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Produto ? Produto[P] : never
  } 
    : Produto
  : Produto


  type ProdutoCountArgs = Merge<
    Omit<ProdutoFindManyArgs, 'select' | 'include'> & {
      select?: ProdutoCountAggregateInputType | true
    }
  >

  export interface ProdutoDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Produto that matches the filter.
     * @param {ProdutoFindUniqueArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProdutoFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProdutoFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Produto'> extends True ? CheckSelect<T, Prisma__ProdutoClient<Produto>, Prisma__ProdutoClient<ProdutoGetPayload<T>>> : CheckSelect<T, Prisma__ProdutoClient<Produto | null >, Prisma__ProdutoClient<ProdutoGetPayload<T> | null >>

    /**
     * Find the first Produto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProdutoFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProdutoFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Produto'> extends True ? CheckSelect<T, Prisma__ProdutoClient<Produto>, Prisma__ProdutoClient<ProdutoGetPayload<T>>> : CheckSelect<T, Prisma__ProdutoClient<Produto | null >, Prisma__ProdutoClient<ProdutoGetPayload<T> | null >>

    /**
     * Find zero or more Produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produtos
     * const produtos = await prisma.produto.findMany()
     * 
     * // Get first 10 Produtos
     * const produtos = await prisma.produto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produtoWithIdOnly = await prisma.produto.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProdutoFindManyArgs>(
      args?: SelectSubset<T, ProdutoFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Produto>>, PrismaPromise<Array<ProdutoGetPayload<T>>>>

    /**
     * Create a Produto.
     * @param {ProdutoCreateArgs} args - Arguments to create a Produto.
     * @example
     * // Create one Produto
     * const Produto = await prisma.produto.create({
     *   data: {
     *     // ... data to create a Produto
     *   }
     * })
     * 
    **/
    create<T extends ProdutoCreateArgs>(
      args: SelectSubset<T, ProdutoCreateArgs>
    ): CheckSelect<T, Prisma__ProdutoClient<Produto>, Prisma__ProdutoClient<ProdutoGetPayload<T>>>

    /**
     * Create many Produtos.
     *     @param {ProdutoCreateManyArgs} args - Arguments to create many Produtos.
     *     @example
     *     // Create many Produtos
     *     const produto = await prisma.produto.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProdutoCreateManyArgs>(
      args?: SelectSubset<T, ProdutoCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Produto.
     * @param {ProdutoDeleteArgs} args - Arguments to delete one Produto.
     * @example
     * // Delete one Produto
     * const Produto = await prisma.produto.delete({
     *   where: {
     *     // ... filter to delete one Produto
     *   }
     * })
     * 
    **/
    delete<T extends ProdutoDeleteArgs>(
      args: SelectSubset<T, ProdutoDeleteArgs>
    ): CheckSelect<T, Prisma__ProdutoClient<Produto>, Prisma__ProdutoClient<ProdutoGetPayload<T>>>

    /**
     * Update one Produto.
     * @param {ProdutoUpdateArgs} args - Arguments to update one Produto.
     * @example
     * // Update one Produto
     * const produto = await prisma.produto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProdutoUpdateArgs>(
      args: SelectSubset<T, ProdutoUpdateArgs>
    ): CheckSelect<T, Prisma__ProdutoClient<Produto>, Prisma__ProdutoClient<ProdutoGetPayload<T>>>

    /**
     * Delete zero or more Produtos.
     * @param {ProdutoDeleteManyArgs} args - Arguments to filter Produtos to delete.
     * @example
     * // Delete a few Produtos
     * const { count } = await prisma.produto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProdutoDeleteManyArgs>(
      args?: SelectSubset<T, ProdutoDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProdutoUpdateManyArgs>(
      args: SelectSubset<T, ProdutoUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Produto.
     * @param {ProdutoUpsertArgs} args - Arguments to update or create a Produto.
     * @example
     * // Update or create a Produto
     * const produto = await prisma.produto.upsert({
     *   create: {
     *     // ... data to create a Produto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produto we want to update
     *   }
     * })
    **/
    upsert<T extends ProdutoUpsertArgs>(
      args: SelectSubset<T, ProdutoUpsertArgs>
    ): CheckSelect<T, Prisma__ProdutoClient<Produto>, Prisma__ProdutoClient<ProdutoGetPayload<T>>>

    /**
     * Count the number of Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoCountArgs} args - Arguments to filter Produtos to count.
     * @example
     * // Count the number of Produtos
     * const count = await prisma.produto.count({
     *   where: {
     *     // ... the filter for the Produtos we want to count
     *   }
     * })
    **/
    count<T extends ProdutoCountArgs>(
      args?: Subset<T, ProdutoCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProdutoAggregateArgs>(args: Subset<T, ProdutoAggregateArgs>): PrismaPromise<GetProdutoAggregateType<T>>

    /**
     * Group by Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProdutoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdutoGroupByArgs['orderBy'] }
        : { orderBy?: ProdutoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProdutoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutoGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProdutoClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    listaDeProdutos<T extends ListaDeProdutosFindManyArgs = {}>(args?: Subset<T, ListaDeProdutosFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ListaDeProdutos>>, PrismaPromise<Array<ListaDeProdutosGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Produto findUnique
   */
  export type ProdutoFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Produto
     * 
    **/
    select?: ProdutoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProdutoInclude | null
    /**
     * Throw an Error if a Produto can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Produto to fetch.
     * 
    **/
    where: ProdutoWhereUniqueInput
  }


  /**
   * Produto findFirst
   */
  export type ProdutoFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Produto
     * 
    **/
    select?: ProdutoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProdutoInclude | null
    /**
     * Throw an Error if a Produto can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Produto to fetch.
     * 
    **/
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     * 
    **/
    orderBy?: Enumerable<ProdutoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     * 
    **/
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     * 
    **/
    distinct?: Enumerable<ProdutoScalarFieldEnum>
  }


  /**
   * Produto findMany
   */
  export type ProdutoFindManyArgs = {
    /**
     * Select specific fields to fetch from the Produto
     * 
    **/
    select?: ProdutoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProdutoInclude | null
    /**
     * Filter, which Produtos to fetch.
     * 
    **/
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     * 
    **/
    orderBy?: Enumerable<ProdutoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produtos.
     * 
    **/
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProdutoScalarFieldEnum>
  }


  /**
   * Produto create
   */
  export type ProdutoCreateArgs = {
    /**
     * Select specific fields to fetch from the Produto
     * 
    **/
    select?: ProdutoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProdutoInclude | null
    /**
     * The data needed to create a Produto.
     * 
    **/
    data: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
  }


  /**
   * Produto createMany
   */
  export type ProdutoCreateManyArgs = {
    /**
     * The data used to create many Produtos.
     * 
    **/
    data: Enumerable<ProdutoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Produto update
   */
  export type ProdutoUpdateArgs = {
    /**
     * Select specific fields to fetch from the Produto
     * 
    **/
    select?: ProdutoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProdutoInclude | null
    /**
     * The data needed to update a Produto.
     * 
    **/
    data: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
    /**
     * Choose, which Produto to update.
     * 
    **/
    where: ProdutoWhereUniqueInput
  }


  /**
   * Produto updateMany
   */
  export type ProdutoUpdateManyArgs = {
    /**
     * The data used to update Produtos.
     * 
    **/
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyInput>
    /**
     * Filter which Produtos to update
     * 
    **/
    where?: ProdutoWhereInput
  }


  /**
   * Produto upsert
   */
  export type ProdutoUpsertArgs = {
    /**
     * Select specific fields to fetch from the Produto
     * 
    **/
    select?: ProdutoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProdutoInclude | null
    /**
     * The filter to search for the Produto to update in case it exists.
     * 
    **/
    where: ProdutoWhereUniqueInput
    /**
     * In case the Produto found by the `where` argument doesn't exist, create a new Produto with this data.
     * 
    **/
    create: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
    /**
     * In case the Produto was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
  }


  /**
   * Produto delete
   */
  export type ProdutoDeleteArgs = {
    /**
     * Select specific fields to fetch from the Produto
     * 
    **/
    select?: ProdutoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProdutoInclude | null
    /**
     * Filter which Produto to delete.
     * 
    **/
    where: ProdutoWhereUniqueInput
  }


  /**
   * Produto deleteMany
   */
  export type ProdutoDeleteManyArgs = {
    /**
     * Filter which Produtos to delete
     * 
    **/
    where?: ProdutoWhereInput
  }


  /**
   * Produto without action
   */
  export type ProdutoArgs = {
    /**
     * Select specific fields to fetch from the Produto
     * 
    **/
    select?: ProdutoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProdutoInclude | null
  }



  /**
   * Model ListaDeProdutos
   */


  export type AggregateListaDeProdutos = {
    _count: ListaDeProdutosCountAggregateOutputType | null
    _avg: ListaDeProdutosAvgAggregateOutputType | null
    _sum: ListaDeProdutosSumAggregateOutputType | null
    _min: ListaDeProdutosMinAggregateOutputType | null
    _max: ListaDeProdutosMaxAggregateOutputType | null
  }

  export type ListaDeProdutosAvgAggregateOutputType = {
    compraId: number | null
    produtoId: number | null
  }

  export type ListaDeProdutosSumAggregateOutputType = {
    compraId: number | null
    produtoId: number | null
  }

  export type ListaDeProdutosMinAggregateOutputType = {
    compraId: number | null
    produtoId: number | null
    adicionado_em: Date | null
  }

  export type ListaDeProdutosMaxAggregateOutputType = {
    compraId: number | null
    produtoId: number | null
    adicionado_em: Date | null
  }

  export type ListaDeProdutosCountAggregateOutputType = {
    compraId: number
    produtoId: number
    adicionado_em: number
    _all: number
  }


  export type ListaDeProdutosAvgAggregateInputType = {
    compraId?: true
    produtoId?: true
  }

  export type ListaDeProdutosSumAggregateInputType = {
    compraId?: true
    produtoId?: true
  }

  export type ListaDeProdutosMinAggregateInputType = {
    compraId?: true
    produtoId?: true
    adicionado_em?: true
  }

  export type ListaDeProdutosMaxAggregateInputType = {
    compraId?: true
    produtoId?: true
    adicionado_em?: true
  }

  export type ListaDeProdutosCountAggregateInputType = {
    compraId?: true
    produtoId?: true
    adicionado_em?: true
    _all?: true
  }

  export type ListaDeProdutosAggregateArgs = {
    /**
     * Filter which ListaDeProdutos to aggregate.
     * 
    **/
    where?: ListaDeProdutosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaDeProdutos to fetch.
     * 
    **/
    orderBy?: Enumerable<ListaDeProdutosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ListaDeProdutosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaDeProdutos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaDeProdutos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ListaDeProdutos
    **/
    _count?: true | ListaDeProdutosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListaDeProdutosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListaDeProdutosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListaDeProdutosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListaDeProdutosMaxAggregateInputType
  }

  export type GetListaDeProdutosAggregateType<T extends ListaDeProdutosAggregateArgs> = {
        [P in keyof T & keyof AggregateListaDeProdutos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListaDeProdutos[P]>
      : GetScalarType<T[P], AggregateListaDeProdutos[P]>
  }




  export type ListaDeProdutosGroupByArgs = {
    where?: ListaDeProdutosWhereInput
    orderBy?: Enumerable<ListaDeProdutosOrderByWithAggregationInput>
    by: Array<ListaDeProdutosScalarFieldEnum>
    having?: ListaDeProdutosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListaDeProdutosCountAggregateInputType | true
    _avg?: ListaDeProdutosAvgAggregateInputType
    _sum?: ListaDeProdutosSumAggregateInputType
    _min?: ListaDeProdutosMinAggregateInputType
    _max?: ListaDeProdutosMaxAggregateInputType
  }


  export type ListaDeProdutosGroupByOutputType = {
    compraId: number
    produtoId: number
    adicionado_em: Date
    _count: ListaDeProdutosCountAggregateOutputType | null
    _avg: ListaDeProdutosAvgAggregateOutputType | null
    _sum: ListaDeProdutosSumAggregateOutputType | null
    _min: ListaDeProdutosMinAggregateOutputType | null
    _max: ListaDeProdutosMaxAggregateOutputType | null
  }

  type GetListaDeProdutosGroupByPayload<T extends ListaDeProdutosGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ListaDeProdutosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListaDeProdutosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListaDeProdutosGroupByOutputType[P]>
            : GetScalarType<T[P], ListaDeProdutosGroupByOutputType[P]>
        }
      >
    >


  export type ListaDeProdutosSelect = {
    compra?: boolean | CompraArgs
    compraId?: boolean
    produto?: boolean | ProdutoArgs
    produtoId?: boolean
    adicionado_em?: boolean
  }

  export type ListaDeProdutosInclude = {
    compra?: boolean | CompraArgs
    produto?: boolean | ProdutoArgs
  }

  export type ListaDeProdutosGetPayload<
    S extends boolean | null | undefined | ListaDeProdutosArgs,
    U = keyof S
      > = S extends true
        ? ListaDeProdutos
    : S extends undefined
    ? never
    : S extends ListaDeProdutosArgs | ListaDeProdutosFindManyArgs
    ?'include' extends U
    ? ListaDeProdutos  & {
    [P in TrueKeys<S['include']>]:
        P extends 'compra' ? CompraGetPayload<S['include'][P]> :
        P extends 'produto' ? ProdutoGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'compra' ? CompraGetPayload<S['select'][P]> :
        P extends 'produto' ? ProdutoGetPayload<S['select'][P]> :  P extends keyof ListaDeProdutos ? ListaDeProdutos[P] : never
  } 
    : ListaDeProdutos
  : ListaDeProdutos


  type ListaDeProdutosCountArgs = Merge<
    Omit<ListaDeProdutosFindManyArgs, 'select' | 'include'> & {
      select?: ListaDeProdutosCountAggregateInputType | true
    }
  >

  export interface ListaDeProdutosDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ListaDeProdutos that matches the filter.
     * @param {ListaDeProdutosFindUniqueArgs} args - Arguments to find a ListaDeProdutos
     * @example
     * // Get one ListaDeProdutos
     * const listaDeProdutos = await prisma.listaDeProdutos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ListaDeProdutosFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ListaDeProdutosFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ListaDeProdutos'> extends True ? CheckSelect<T, Prisma__ListaDeProdutosClient<ListaDeProdutos>, Prisma__ListaDeProdutosClient<ListaDeProdutosGetPayload<T>>> : CheckSelect<T, Prisma__ListaDeProdutosClient<ListaDeProdutos | null >, Prisma__ListaDeProdutosClient<ListaDeProdutosGetPayload<T> | null >>

    /**
     * Find the first ListaDeProdutos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaDeProdutosFindFirstArgs} args - Arguments to find a ListaDeProdutos
     * @example
     * // Get one ListaDeProdutos
     * const listaDeProdutos = await prisma.listaDeProdutos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ListaDeProdutosFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ListaDeProdutosFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ListaDeProdutos'> extends True ? CheckSelect<T, Prisma__ListaDeProdutosClient<ListaDeProdutos>, Prisma__ListaDeProdutosClient<ListaDeProdutosGetPayload<T>>> : CheckSelect<T, Prisma__ListaDeProdutosClient<ListaDeProdutos | null >, Prisma__ListaDeProdutosClient<ListaDeProdutosGetPayload<T> | null >>

    /**
     * Find zero or more ListaDeProdutos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaDeProdutosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ListaDeProdutos
     * const listaDeProdutos = await prisma.listaDeProdutos.findMany()
     * 
     * // Get first 10 ListaDeProdutos
     * const listaDeProdutos = await prisma.listaDeProdutos.findMany({ take: 10 })
     * 
     * // Only select the `compraId`
     * const listaDeProdutosWithCompraIdOnly = await prisma.listaDeProdutos.findMany({ select: { compraId: true } })
     * 
    **/
    findMany<T extends ListaDeProdutosFindManyArgs>(
      args?: SelectSubset<T, ListaDeProdutosFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ListaDeProdutos>>, PrismaPromise<Array<ListaDeProdutosGetPayload<T>>>>

    /**
     * Create a ListaDeProdutos.
     * @param {ListaDeProdutosCreateArgs} args - Arguments to create a ListaDeProdutos.
     * @example
     * // Create one ListaDeProdutos
     * const ListaDeProdutos = await prisma.listaDeProdutos.create({
     *   data: {
     *     // ... data to create a ListaDeProdutos
     *   }
     * })
     * 
    **/
    create<T extends ListaDeProdutosCreateArgs>(
      args: SelectSubset<T, ListaDeProdutosCreateArgs>
    ): CheckSelect<T, Prisma__ListaDeProdutosClient<ListaDeProdutos>, Prisma__ListaDeProdutosClient<ListaDeProdutosGetPayload<T>>>

    /**
     * Create many ListaDeProdutos.
     *     @param {ListaDeProdutosCreateManyArgs} args - Arguments to create many ListaDeProdutos.
     *     @example
     *     // Create many ListaDeProdutos
     *     const listaDeProdutos = await prisma.listaDeProdutos.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ListaDeProdutosCreateManyArgs>(
      args?: SelectSubset<T, ListaDeProdutosCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ListaDeProdutos.
     * @param {ListaDeProdutosDeleteArgs} args - Arguments to delete one ListaDeProdutos.
     * @example
     * // Delete one ListaDeProdutos
     * const ListaDeProdutos = await prisma.listaDeProdutos.delete({
     *   where: {
     *     // ... filter to delete one ListaDeProdutos
     *   }
     * })
     * 
    **/
    delete<T extends ListaDeProdutosDeleteArgs>(
      args: SelectSubset<T, ListaDeProdutosDeleteArgs>
    ): CheckSelect<T, Prisma__ListaDeProdutosClient<ListaDeProdutos>, Prisma__ListaDeProdutosClient<ListaDeProdutosGetPayload<T>>>

    /**
     * Update one ListaDeProdutos.
     * @param {ListaDeProdutosUpdateArgs} args - Arguments to update one ListaDeProdutos.
     * @example
     * // Update one ListaDeProdutos
     * const listaDeProdutos = await prisma.listaDeProdutos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ListaDeProdutosUpdateArgs>(
      args: SelectSubset<T, ListaDeProdutosUpdateArgs>
    ): CheckSelect<T, Prisma__ListaDeProdutosClient<ListaDeProdutos>, Prisma__ListaDeProdutosClient<ListaDeProdutosGetPayload<T>>>

    /**
     * Delete zero or more ListaDeProdutos.
     * @param {ListaDeProdutosDeleteManyArgs} args - Arguments to filter ListaDeProdutos to delete.
     * @example
     * // Delete a few ListaDeProdutos
     * const { count } = await prisma.listaDeProdutos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ListaDeProdutosDeleteManyArgs>(
      args?: SelectSubset<T, ListaDeProdutosDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListaDeProdutos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaDeProdutosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ListaDeProdutos
     * const listaDeProdutos = await prisma.listaDeProdutos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ListaDeProdutosUpdateManyArgs>(
      args: SelectSubset<T, ListaDeProdutosUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ListaDeProdutos.
     * @param {ListaDeProdutosUpsertArgs} args - Arguments to update or create a ListaDeProdutos.
     * @example
     * // Update or create a ListaDeProdutos
     * const listaDeProdutos = await prisma.listaDeProdutos.upsert({
     *   create: {
     *     // ... data to create a ListaDeProdutos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ListaDeProdutos we want to update
     *   }
     * })
    **/
    upsert<T extends ListaDeProdutosUpsertArgs>(
      args: SelectSubset<T, ListaDeProdutosUpsertArgs>
    ): CheckSelect<T, Prisma__ListaDeProdutosClient<ListaDeProdutos>, Prisma__ListaDeProdutosClient<ListaDeProdutosGetPayload<T>>>

    /**
     * Count the number of ListaDeProdutos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaDeProdutosCountArgs} args - Arguments to filter ListaDeProdutos to count.
     * @example
     * // Count the number of ListaDeProdutos
     * const count = await prisma.listaDeProdutos.count({
     *   where: {
     *     // ... the filter for the ListaDeProdutos we want to count
     *   }
     * })
    **/
    count<T extends ListaDeProdutosCountArgs>(
      args?: Subset<T, ListaDeProdutosCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListaDeProdutosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ListaDeProdutos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaDeProdutosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ListaDeProdutosAggregateArgs>(args: Subset<T, ListaDeProdutosAggregateArgs>): PrismaPromise<GetListaDeProdutosAggregateType<T>>

    /**
     * Group by ListaDeProdutos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaDeProdutosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ListaDeProdutosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListaDeProdutosGroupByArgs['orderBy'] }
        : { orderBy?: ListaDeProdutosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ListaDeProdutosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListaDeProdutosGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ListaDeProdutos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ListaDeProdutosClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    compra<T extends CompraArgs = {}>(args?: Subset<T, CompraArgs>): CheckSelect<T, Prisma__CompraClient<Compra | null >, Prisma__CompraClient<CompraGetPayload<T> | null >>;

    produto<T extends ProdutoArgs = {}>(args?: Subset<T, ProdutoArgs>): CheckSelect<T, Prisma__ProdutoClient<Produto | null >, Prisma__ProdutoClient<ProdutoGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ListaDeProdutos findUnique
   */
  export type ListaDeProdutosFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ListaDeProdutos
     * 
    **/
    select?: ListaDeProdutosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ListaDeProdutosInclude | null
    /**
     * Throw an Error if a ListaDeProdutos can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ListaDeProdutos to fetch.
     * 
    **/
    where: ListaDeProdutosWhereUniqueInput
  }


  /**
   * ListaDeProdutos findFirst
   */
  export type ListaDeProdutosFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ListaDeProdutos
     * 
    **/
    select?: ListaDeProdutosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ListaDeProdutosInclude | null
    /**
     * Throw an Error if a ListaDeProdutos can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ListaDeProdutos to fetch.
     * 
    **/
    where?: ListaDeProdutosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaDeProdutos to fetch.
     * 
    **/
    orderBy?: Enumerable<ListaDeProdutosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListaDeProdutos.
     * 
    **/
    cursor?: ListaDeProdutosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaDeProdutos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaDeProdutos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListaDeProdutos.
     * 
    **/
    distinct?: Enumerable<ListaDeProdutosScalarFieldEnum>
  }


  /**
   * ListaDeProdutos findMany
   */
  export type ListaDeProdutosFindManyArgs = {
    /**
     * Select specific fields to fetch from the ListaDeProdutos
     * 
    **/
    select?: ListaDeProdutosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ListaDeProdutosInclude | null
    /**
     * Filter, which ListaDeProdutos to fetch.
     * 
    **/
    where?: ListaDeProdutosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaDeProdutos to fetch.
     * 
    **/
    orderBy?: Enumerable<ListaDeProdutosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ListaDeProdutos.
     * 
    **/
    cursor?: ListaDeProdutosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaDeProdutos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaDeProdutos.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ListaDeProdutosScalarFieldEnum>
  }


  /**
   * ListaDeProdutos create
   */
  export type ListaDeProdutosCreateArgs = {
    /**
     * Select specific fields to fetch from the ListaDeProdutos
     * 
    **/
    select?: ListaDeProdutosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ListaDeProdutosInclude | null
    /**
     * The data needed to create a ListaDeProdutos.
     * 
    **/
    data: XOR<ListaDeProdutosCreateInput, ListaDeProdutosUncheckedCreateInput>
  }


  /**
   * ListaDeProdutos createMany
   */
  export type ListaDeProdutosCreateManyArgs = {
    /**
     * The data used to create many ListaDeProdutos.
     * 
    **/
    data: Enumerable<ListaDeProdutosCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ListaDeProdutos update
   */
  export type ListaDeProdutosUpdateArgs = {
    /**
     * Select specific fields to fetch from the ListaDeProdutos
     * 
    **/
    select?: ListaDeProdutosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ListaDeProdutosInclude | null
    /**
     * The data needed to update a ListaDeProdutos.
     * 
    **/
    data: XOR<ListaDeProdutosUpdateInput, ListaDeProdutosUncheckedUpdateInput>
    /**
     * Choose, which ListaDeProdutos to update.
     * 
    **/
    where: ListaDeProdutosWhereUniqueInput
  }


  /**
   * ListaDeProdutos updateMany
   */
  export type ListaDeProdutosUpdateManyArgs = {
    /**
     * The data used to update ListaDeProdutos.
     * 
    **/
    data: XOR<ListaDeProdutosUpdateManyMutationInput, ListaDeProdutosUncheckedUpdateManyInput>
    /**
     * Filter which ListaDeProdutos to update
     * 
    **/
    where?: ListaDeProdutosWhereInput
  }


  /**
   * ListaDeProdutos upsert
   */
  export type ListaDeProdutosUpsertArgs = {
    /**
     * Select specific fields to fetch from the ListaDeProdutos
     * 
    **/
    select?: ListaDeProdutosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ListaDeProdutosInclude | null
    /**
     * The filter to search for the ListaDeProdutos to update in case it exists.
     * 
    **/
    where: ListaDeProdutosWhereUniqueInput
    /**
     * In case the ListaDeProdutos found by the `where` argument doesn't exist, create a new ListaDeProdutos with this data.
     * 
    **/
    create: XOR<ListaDeProdutosCreateInput, ListaDeProdutosUncheckedCreateInput>
    /**
     * In case the ListaDeProdutos was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ListaDeProdutosUpdateInput, ListaDeProdutosUncheckedUpdateInput>
  }


  /**
   * ListaDeProdutos delete
   */
  export type ListaDeProdutosDeleteArgs = {
    /**
     * Select specific fields to fetch from the ListaDeProdutos
     * 
    **/
    select?: ListaDeProdutosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ListaDeProdutosInclude | null
    /**
     * Filter which ListaDeProdutos to delete.
     * 
    **/
    where: ListaDeProdutosWhereUniqueInput
  }


  /**
   * ListaDeProdutos deleteMany
   */
  export type ListaDeProdutosDeleteManyArgs = {
    /**
     * Filter which ListaDeProdutos to delete
     * 
    **/
    where?: ListaDeProdutosWhereInput
  }


  /**
   * ListaDeProdutos without action
   */
  export type ListaDeProdutosArgs = {
    /**
     * Select specific fields to fetch from the ListaDeProdutos
     * 
    **/
    select?: ListaDeProdutosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ListaDeProdutosInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CompraScalarFieldEnum: {
    id: 'id',
    total: 'total',
    tipo_pagamento: 'tipo_pagamento',
    status: 'status',
    data_criacao: 'data_criacao'
  };

  export type CompraScalarFieldEnum = (typeof CompraScalarFieldEnum)[keyof typeof CompraScalarFieldEnum]


  export const ProdutoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    preco: 'preco',
    data_criacao: 'data_criacao',
    data_atualizacao: 'data_atualizacao'
  };

  export type ProdutoScalarFieldEnum = (typeof ProdutoScalarFieldEnum)[keyof typeof ProdutoScalarFieldEnum]


  export const ListaDeProdutosScalarFieldEnum: {
    compraId: 'compraId',
    produtoId: 'produtoId',
    adicionado_em: 'adicionado_em'
  };

  export type ListaDeProdutosScalarFieldEnum = (typeof ListaDeProdutosScalarFieldEnum)[keyof typeof ListaDeProdutosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type CompraWhereInput = {
    AND?: Enumerable<CompraWhereInput>
    OR?: Enumerable<CompraWhereInput>
    NOT?: Enumerable<CompraWhereInput>
    id?: IntFilter | number
    total?: FloatFilter | number
    tipo_pagamento?: EnumPagamentoFilter | Pagamento
    status?: EnumStatusFilter | Status
    data_criacao?: DateTimeFilter | Date | string
    listaDeProdutos?: ListaDeProdutosListRelationFilter
  }

  export type CompraOrderByWithRelationInput = {
    id?: SortOrder
    total?: SortOrder
    tipo_pagamento?: SortOrder
    status?: SortOrder
    data_criacao?: SortOrder
    listaDeProdutos?: ListaDeProdutosOrderByRelationAggregateInput
  }

  export type CompraWhereUniqueInput = {
    id?: number
  }

  export type CompraOrderByWithAggregationInput = {
    id?: SortOrder
    total?: SortOrder
    tipo_pagamento?: SortOrder
    status?: SortOrder
    data_criacao?: SortOrder
    _count?: CompraCountOrderByAggregateInput
    _avg?: CompraAvgOrderByAggregateInput
    _max?: CompraMaxOrderByAggregateInput
    _min?: CompraMinOrderByAggregateInput
    _sum?: CompraSumOrderByAggregateInput
  }

  export type CompraScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CompraScalarWhereWithAggregatesInput>
    OR?: Enumerable<CompraScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CompraScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    total?: FloatWithAggregatesFilter | number
    tipo_pagamento?: EnumPagamentoWithAggregatesFilter | Pagamento
    status?: EnumStatusWithAggregatesFilter | Status
    data_criacao?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ProdutoWhereInput = {
    AND?: Enumerable<ProdutoWhereInput>
    OR?: Enumerable<ProdutoWhereInput>
    NOT?: Enumerable<ProdutoWhereInput>
    id?: IntFilter | number
    nome?: StringFilter | string
    descricao?: StringFilter | string
    preco?: FloatFilter | number
    data_criacao?: DateTimeFilter | Date | string
    data_atualizacao?: DateTimeFilter | Date | string
    listaDeProdutos?: ListaDeProdutosListRelationFilter
  }

  export type ProdutoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    preco?: SortOrder
    data_criacao?: SortOrder
    data_atualizacao?: SortOrder
    listaDeProdutos?: ListaDeProdutosOrderByRelationAggregateInput
  }

  export type ProdutoWhereUniqueInput = {
    id?: number
  }

  export type ProdutoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    preco?: SortOrder
    data_criacao?: SortOrder
    data_atualizacao?: SortOrder
    _count?: ProdutoCountOrderByAggregateInput
    _avg?: ProdutoAvgOrderByAggregateInput
    _max?: ProdutoMaxOrderByAggregateInput
    _min?: ProdutoMinOrderByAggregateInput
    _sum?: ProdutoSumOrderByAggregateInput
  }

  export type ProdutoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProdutoScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProdutoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProdutoScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    nome?: StringWithAggregatesFilter | string
    descricao?: StringWithAggregatesFilter | string
    preco?: FloatWithAggregatesFilter | number
    data_criacao?: DateTimeWithAggregatesFilter | Date | string
    data_atualizacao?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ListaDeProdutosWhereInput = {
    AND?: Enumerable<ListaDeProdutosWhereInput>
    OR?: Enumerable<ListaDeProdutosWhereInput>
    NOT?: Enumerable<ListaDeProdutosWhereInput>
    compra?: XOR<CompraRelationFilter, CompraWhereInput>
    compraId?: IntFilter | number
    produto?: XOR<ProdutoRelationFilter, ProdutoWhereInput>
    produtoId?: IntFilter | number
    adicionado_em?: DateTimeFilter | Date | string
  }

  export type ListaDeProdutosOrderByWithRelationInput = {
    compra?: CompraOrderByWithRelationInput
    compraId?: SortOrder
    produto?: ProdutoOrderByWithRelationInput
    produtoId?: SortOrder
    adicionado_em?: SortOrder
  }

  export type ListaDeProdutosWhereUniqueInput = {
    compraId_produtoId?: ListaDeProdutosCompraIdProdutoIdCompoundUniqueInput
  }

  export type ListaDeProdutosOrderByWithAggregationInput = {
    compraId?: SortOrder
    produtoId?: SortOrder
    adicionado_em?: SortOrder
    _count?: ListaDeProdutosCountOrderByAggregateInput
    _avg?: ListaDeProdutosAvgOrderByAggregateInput
    _max?: ListaDeProdutosMaxOrderByAggregateInput
    _min?: ListaDeProdutosMinOrderByAggregateInput
    _sum?: ListaDeProdutosSumOrderByAggregateInput
  }

  export type ListaDeProdutosScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ListaDeProdutosScalarWhereWithAggregatesInput>
    OR?: Enumerable<ListaDeProdutosScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ListaDeProdutosScalarWhereWithAggregatesInput>
    compraId?: IntWithAggregatesFilter | number
    produtoId?: IntWithAggregatesFilter | number
    adicionado_em?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CompraCreateInput = {
    total: number
    tipo_pagamento: Pagamento
    status?: Status
    data_criacao?: Date | string
    listaDeProdutos?: ListaDeProdutosCreateNestedManyWithoutCompraInput
  }

  export type CompraUncheckedCreateInput = {
    id?: number
    total: number
    tipo_pagamento: Pagamento
    status?: Status
    data_criacao?: Date | string
    listaDeProdutos?: ListaDeProdutosUncheckedCreateNestedManyWithoutCompraInput
  }

  export type CompraUpdateInput = {
    total?: FloatFieldUpdateOperationsInput | number
    tipo_pagamento?: EnumPagamentoFieldUpdateOperationsInput | Pagamento
    status?: EnumStatusFieldUpdateOperationsInput | Status
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    listaDeProdutos?: ListaDeProdutosUpdateManyWithoutCompraInput
  }

  export type CompraUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    tipo_pagamento?: EnumPagamentoFieldUpdateOperationsInput | Pagamento
    status?: EnumStatusFieldUpdateOperationsInput | Status
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    listaDeProdutos?: ListaDeProdutosUncheckedUpdateManyWithoutCompraInput
  }

  export type CompraCreateManyInput = {
    id?: number
    total: number
    tipo_pagamento: Pagamento
    status?: Status
    data_criacao?: Date | string
  }

  export type CompraUpdateManyMutationInput = {
    total?: FloatFieldUpdateOperationsInput | number
    tipo_pagamento?: EnumPagamentoFieldUpdateOperationsInput | Pagamento
    status?: EnumStatusFieldUpdateOperationsInput | Status
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompraUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    tipo_pagamento?: EnumPagamentoFieldUpdateOperationsInput | Pagamento
    status?: EnumStatusFieldUpdateOperationsInput | Status
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProdutoCreateInput = {
    nome: string
    descricao: string
    preco: number
    data_criacao?: Date | string
    data_atualizacao?: Date | string
    listaDeProdutos?: ListaDeProdutosCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateInput = {
    id?: number
    nome: string
    descricao: string
    preco: number
    data_criacao?: Date | string
    data_atualizacao?: Date | string
    listaDeProdutos?: ListaDeProdutosUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    listaDeProdutos?: ListaDeProdutosUpdateManyWithoutProdutoInput
  }

  export type ProdutoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    listaDeProdutos?: ListaDeProdutosUncheckedUpdateManyWithoutProdutoInput
  }

  export type ProdutoCreateManyInput = {
    id?: number
    nome: string
    descricao: string
    preco: number
    data_criacao?: Date | string
    data_atualizacao?: Date | string
  }

  export type ProdutoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProdutoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListaDeProdutosCreateInput = {
    compra: CompraCreateNestedOneWithoutListaDeProdutosInput
    produto: ProdutoCreateNestedOneWithoutListaDeProdutosInput
    adicionado_em?: Date | string
  }

  export type ListaDeProdutosUncheckedCreateInput = {
    compraId: number
    produtoId: number
    adicionado_em?: Date | string
  }

  export type ListaDeProdutosUpdateInput = {
    compra?: CompraUpdateOneRequiredWithoutListaDeProdutosInput
    produto?: ProdutoUpdateOneRequiredWithoutListaDeProdutosInput
    adicionado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListaDeProdutosUncheckedUpdateInput = {
    compraId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    adicionado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListaDeProdutosCreateManyInput = {
    compraId: number
    produtoId: number
    adicionado_em?: Date | string
  }

  export type ListaDeProdutosUpdateManyMutationInput = {
    adicionado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListaDeProdutosUncheckedUpdateManyInput = {
    compraId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    adicionado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type EnumPagamentoFilter = {
    equals?: Pagamento
    in?: Enumerable<Pagamento>
    notIn?: Enumerable<Pagamento>
    not?: NestedEnumPagamentoFilter | Pagamento
  }

  export type EnumStatusFilter = {
    equals?: Status
    in?: Enumerable<Status>
    notIn?: Enumerable<Status>
    not?: NestedEnumStatusFilter | Status
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type ListaDeProdutosListRelationFilter = {
    every?: ListaDeProdutosWhereInput
    some?: ListaDeProdutosWhereInput
    none?: ListaDeProdutosWhereInput
  }

  export type ListaDeProdutosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompraCountOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    tipo_pagamento?: SortOrder
    status?: SortOrder
    data_criacao?: SortOrder
  }

  export type CompraAvgOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
  }

  export type CompraMaxOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    tipo_pagamento?: SortOrder
    status?: SortOrder
    data_criacao?: SortOrder
  }

  export type CompraMinOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    tipo_pagamento?: SortOrder
    status?: SortOrder
    data_criacao?: SortOrder
  }

  export type CompraSumOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type EnumPagamentoWithAggregatesFilter = {
    equals?: Pagamento
    in?: Enumerable<Pagamento>
    notIn?: Enumerable<Pagamento>
    not?: NestedEnumPagamentoWithAggregatesFilter | Pagamento
    _count?: NestedIntFilter
    _min?: NestedEnumPagamentoFilter
    _max?: NestedEnumPagamentoFilter
  }

  export type EnumStatusWithAggregatesFilter = {
    equals?: Status
    in?: Enumerable<Status>
    notIn?: Enumerable<Status>
    not?: NestedEnumStatusWithAggregatesFilter | Status
    _count?: NestedIntFilter
    _min?: NestedEnumStatusFilter
    _max?: NestedEnumStatusFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type ProdutoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    preco?: SortOrder
    data_criacao?: SortOrder
    data_atualizacao?: SortOrder
  }

  export type ProdutoAvgOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
  }

  export type ProdutoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    preco?: SortOrder
    data_criacao?: SortOrder
    data_atualizacao?: SortOrder
  }

  export type ProdutoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    preco?: SortOrder
    data_criacao?: SortOrder
    data_atualizacao?: SortOrder
  }

  export type ProdutoSumOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type CompraRelationFilter = {
    is?: CompraWhereInput
    isNot?: CompraWhereInput
  }

  export type ProdutoRelationFilter = {
    is?: ProdutoWhereInput
    isNot?: ProdutoWhereInput
  }

  export type ListaDeProdutosCompraIdProdutoIdCompoundUniqueInput = {
    compraId: number
    produtoId: number
  }

  export type ListaDeProdutosCountOrderByAggregateInput = {
    compraId?: SortOrder
    produtoId?: SortOrder
    adicionado_em?: SortOrder
  }

  export type ListaDeProdutosAvgOrderByAggregateInput = {
    compraId?: SortOrder
    produtoId?: SortOrder
  }

  export type ListaDeProdutosMaxOrderByAggregateInput = {
    compraId?: SortOrder
    produtoId?: SortOrder
    adicionado_em?: SortOrder
  }

  export type ListaDeProdutosMinOrderByAggregateInput = {
    compraId?: SortOrder
    produtoId?: SortOrder
    adicionado_em?: SortOrder
  }

  export type ListaDeProdutosSumOrderByAggregateInput = {
    compraId?: SortOrder
    produtoId?: SortOrder
  }

  export type ListaDeProdutosCreateNestedManyWithoutCompraInput = {
    create?: XOR<Enumerable<ListaDeProdutosCreateWithoutCompraInput>, Enumerable<ListaDeProdutosUncheckedCreateWithoutCompraInput>>
    connectOrCreate?: Enumerable<ListaDeProdutosCreateOrConnectWithoutCompraInput>
    createMany?: ListaDeProdutosCreateManyCompraInputEnvelope
    connect?: Enumerable<ListaDeProdutosWhereUniqueInput>
  }

  export type ListaDeProdutosUncheckedCreateNestedManyWithoutCompraInput = {
    create?: XOR<Enumerable<ListaDeProdutosCreateWithoutCompraInput>, Enumerable<ListaDeProdutosUncheckedCreateWithoutCompraInput>>
    connectOrCreate?: Enumerable<ListaDeProdutosCreateOrConnectWithoutCompraInput>
    createMany?: ListaDeProdutosCreateManyCompraInputEnvelope
    connect?: Enumerable<ListaDeProdutosWhereUniqueInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPagamentoFieldUpdateOperationsInput = {
    set?: Pagamento
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: Status
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ListaDeProdutosUpdateManyWithoutCompraInput = {
    create?: XOR<Enumerable<ListaDeProdutosCreateWithoutCompraInput>, Enumerable<ListaDeProdutosUncheckedCreateWithoutCompraInput>>
    connectOrCreate?: Enumerable<ListaDeProdutosCreateOrConnectWithoutCompraInput>
    upsert?: Enumerable<ListaDeProdutosUpsertWithWhereUniqueWithoutCompraInput>
    createMany?: ListaDeProdutosCreateManyCompraInputEnvelope
    set?: Enumerable<ListaDeProdutosWhereUniqueInput>
    disconnect?: Enumerable<ListaDeProdutosWhereUniqueInput>
    delete?: Enumerable<ListaDeProdutosWhereUniqueInput>
    connect?: Enumerable<ListaDeProdutosWhereUniqueInput>
    update?: Enumerable<ListaDeProdutosUpdateWithWhereUniqueWithoutCompraInput>
    updateMany?: Enumerable<ListaDeProdutosUpdateManyWithWhereWithoutCompraInput>
    deleteMany?: Enumerable<ListaDeProdutosScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ListaDeProdutosUncheckedUpdateManyWithoutCompraInput = {
    create?: XOR<Enumerable<ListaDeProdutosCreateWithoutCompraInput>, Enumerable<ListaDeProdutosUncheckedCreateWithoutCompraInput>>
    connectOrCreate?: Enumerable<ListaDeProdutosCreateOrConnectWithoutCompraInput>
    upsert?: Enumerable<ListaDeProdutosUpsertWithWhereUniqueWithoutCompraInput>
    createMany?: ListaDeProdutosCreateManyCompraInputEnvelope
    set?: Enumerable<ListaDeProdutosWhereUniqueInput>
    disconnect?: Enumerable<ListaDeProdutosWhereUniqueInput>
    delete?: Enumerable<ListaDeProdutosWhereUniqueInput>
    connect?: Enumerable<ListaDeProdutosWhereUniqueInput>
    update?: Enumerable<ListaDeProdutosUpdateWithWhereUniqueWithoutCompraInput>
    updateMany?: Enumerable<ListaDeProdutosUpdateManyWithWhereWithoutCompraInput>
    deleteMany?: Enumerable<ListaDeProdutosScalarWhereInput>
  }

  export type ListaDeProdutosCreateNestedManyWithoutProdutoInput = {
    create?: XOR<Enumerable<ListaDeProdutosCreateWithoutProdutoInput>, Enumerable<ListaDeProdutosUncheckedCreateWithoutProdutoInput>>
    connectOrCreate?: Enumerable<ListaDeProdutosCreateOrConnectWithoutProdutoInput>
    createMany?: ListaDeProdutosCreateManyProdutoInputEnvelope
    connect?: Enumerable<ListaDeProdutosWhereUniqueInput>
  }

  export type ListaDeProdutosUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<Enumerable<ListaDeProdutosCreateWithoutProdutoInput>, Enumerable<ListaDeProdutosUncheckedCreateWithoutProdutoInput>>
    connectOrCreate?: Enumerable<ListaDeProdutosCreateOrConnectWithoutProdutoInput>
    createMany?: ListaDeProdutosCreateManyProdutoInputEnvelope
    connect?: Enumerable<ListaDeProdutosWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ListaDeProdutosUpdateManyWithoutProdutoInput = {
    create?: XOR<Enumerable<ListaDeProdutosCreateWithoutProdutoInput>, Enumerable<ListaDeProdutosUncheckedCreateWithoutProdutoInput>>
    connectOrCreate?: Enumerable<ListaDeProdutosCreateOrConnectWithoutProdutoInput>
    upsert?: Enumerable<ListaDeProdutosUpsertWithWhereUniqueWithoutProdutoInput>
    createMany?: ListaDeProdutosCreateManyProdutoInputEnvelope
    set?: Enumerable<ListaDeProdutosWhereUniqueInput>
    disconnect?: Enumerable<ListaDeProdutosWhereUniqueInput>
    delete?: Enumerable<ListaDeProdutosWhereUniqueInput>
    connect?: Enumerable<ListaDeProdutosWhereUniqueInput>
    update?: Enumerable<ListaDeProdutosUpdateWithWhereUniqueWithoutProdutoInput>
    updateMany?: Enumerable<ListaDeProdutosUpdateManyWithWhereWithoutProdutoInput>
    deleteMany?: Enumerable<ListaDeProdutosScalarWhereInput>
  }

  export type ListaDeProdutosUncheckedUpdateManyWithoutProdutoInput = {
    create?: XOR<Enumerable<ListaDeProdutosCreateWithoutProdutoInput>, Enumerable<ListaDeProdutosUncheckedCreateWithoutProdutoInput>>
    connectOrCreate?: Enumerable<ListaDeProdutosCreateOrConnectWithoutProdutoInput>
    upsert?: Enumerable<ListaDeProdutosUpsertWithWhereUniqueWithoutProdutoInput>
    createMany?: ListaDeProdutosCreateManyProdutoInputEnvelope
    set?: Enumerable<ListaDeProdutosWhereUniqueInput>
    disconnect?: Enumerable<ListaDeProdutosWhereUniqueInput>
    delete?: Enumerable<ListaDeProdutosWhereUniqueInput>
    connect?: Enumerable<ListaDeProdutosWhereUniqueInput>
    update?: Enumerable<ListaDeProdutosUpdateWithWhereUniqueWithoutProdutoInput>
    updateMany?: Enumerable<ListaDeProdutosUpdateManyWithWhereWithoutProdutoInput>
    deleteMany?: Enumerable<ListaDeProdutosScalarWhereInput>
  }

  export type CompraCreateNestedOneWithoutListaDeProdutosInput = {
    create?: XOR<CompraCreateWithoutListaDeProdutosInput, CompraUncheckedCreateWithoutListaDeProdutosInput>
    connectOrCreate?: CompraCreateOrConnectWithoutListaDeProdutosInput
    connect?: CompraWhereUniqueInput
  }

  export type ProdutoCreateNestedOneWithoutListaDeProdutosInput = {
    create?: XOR<ProdutoCreateWithoutListaDeProdutosInput, ProdutoUncheckedCreateWithoutListaDeProdutosInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutListaDeProdutosInput
    connect?: ProdutoWhereUniqueInput
  }

  export type CompraUpdateOneRequiredWithoutListaDeProdutosInput = {
    create?: XOR<CompraCreateWithoutListaDeProdutosInput, CompraUncheckedCreateWithoutListaDeProdutosInput>
    connectOrCreate?: CompraCreateOrConnectWithoutListaDeProdutosInput
    upsert?: CompraUpsertWithoutListaDeProdutosInput
    connect?: CompraWhereUniqueInput
    update?: XOR<CompraUpdateWithoutListaDeProdutosInput, CompraUncheckedUpdateWithoutListaDeProdutosInput>
  }

  export type ProdutoUpdateOneRequiredWithoutListaDeProdutosInput = {
    create?: XOR<ProdutoCreateWithoutListaDeProdutosInput, ProdutoUncheckedCreateWithoutListaDeProdutosInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutListaDeProdutosInput
    upsert?: ProdutoUpsertWithoutListaDeProdutosInput
    connect?: ProdutoWhereUniqueInput
    update?: XOR<ProdutoUpdateWithoutListaDeProdutosInput, ProdutoUncheckedUpdateWithoutListaDeProdutosInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedEnumPagamentoFilter = {
    equals?: Pagamento
    in?: Enumerable<Pagamento>
    notIn?: Enumerable<Pagamento>
    not?: NestedEnumPagamentoFilter | Pagamento
  }

  export type NestedEnumStatusFilter = {
    equals?: Status
    in?: Enumerable<Status>
    notIn?: Enumerable<Status>
    not?: NestedEnumStatusFilter | Status
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type NestedEnumPagamentoWithAggregatesFilter = {
    equals?: Pagamento
    in?: Enumerable<Pagamento>
    notIn?: Enumerable<Pagamento>
    not?: NestedEnumPagamentoWithAggregatesFilter | Pagamento
    _count?: NestedIntFilter
    _min?: NestedEnumPagamentoFilter
    _max?: NestedEnumPagamentoFilter
  }

  export type NestedEnumStatusWithAggregatesFilter = {
    equals?: Status
    in?: Enumerable<Status>
    notIn?: Enumerable<Status>
    not?: NestedEnumStatusWithAggregatesFilter | Status
    _count?: NestedIntFilter
    _min?: NestedEnumStatusFilter
    _max?: NestedEnumStatusFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type ListaDeProdutosCreateWithoutCompraInput = {
    produto: ProdutoCreateNestedOneWithoutListaDeProdutosInput
    adicionado_em?: Date | string
  }

  export type ListaDeProdutosUncheckedCreateWithoutCompraInput = {
    produtoId: number
    adicionado_em?: Date | string
  }

  export type ListaDeProdutosCreateOrConnectWithoutCompraInput = {
    where: ListaDeProdutosWhereUniqueInput
    create: XOR<ListaDeProdutosCreateWithoutCompraInput, ListaDeProdutosUncheckedCreateWithoutCompraInput>
  }

  export type ListaDeProdutosCreateManyCompraInputEnvelope = {
    data: Enumerable<ListaDeProdutosCreateManyCompraInput>
    skipDuplicates?: boolean
  }

  export type ListaDeProdutosUpsertWithWhereUniqueWithoutCompraInput = {
    where: ListaDeProdutosWhereUniqueInput
    update: XOR<ListaDeProdutosUpdateWithoutCompraInput, ListaDeProdutosUncheckedUpdateWithoutCompraInput>
    create: XOR<ListaDeProdutosCreateWithoutCompraInput, ListaDeProdutosUncheckedCreateWithoutCompraInput>
  }

  export type ListaDeProdutosUpdateWithWhereUniqueWithoutCompraInput = {
    where: ListaDeProdutosWhereUniqueInput
    data: XOR<ListaDeProdutosUpdateWithoutCompraInput, ListaDeProdutosUncheckedUpdateWithoutCompraInput>
  }

  export type ListaDeProdutosUpdateManyWithWhereWithoutCompraInput = {
    where: ListaDeProdutosScalarWhereInput
    data: XOR<ListaDeProdutosUpdateManyMutationInput, ListaDeProdutosUncheckedUpdateManyWithoutListaDeProdutosInput>
  }

  export type ListaDeProdutosScalarWhereInput = {
    AND?: Enumerable<ListaDeProdutosScalarWhereInput>
    OR?: Enumerable<ListaDeProdutosScalarWhereInput>
    NOT?: Enumerable<ListaDeProdutosScalarWhereInput>
    compraId?: IntFilter | number
    produtoId?: IntFilter | number
    adicionado_em?: DateTimeFilter | Date | string
  }

  export type ListaDeProdutosCreateWithoutProdutoInput = {
    compra: CompraCreateNestedOneWithoutListaDeProdutosInput
    adicionado_em?: Date | string
  }

  export type ListaDeProdutosUncheckedCreateWithoutProdutoInput = {
    compraId: number
    adicionado_em?: Date | string
  }

  export type ListaDeProdutosCreateOrConnectWithoutProdutoInput = {
    where: ListaDeProdutosWhereUniqueInput
    create: XOR<ListaDeProdutosCreateWithoutProdutoInput, ListaDeProdutosUncheckedCreateWithoutProdutoInput>
  }

  export type ListaDeProdutosCreateManyProdutoInputEnvelope = {
    data: Enumerable<ListaDeProdutosCreateManyProdutoInput>
    skipDuplicates?: boolean
  }

  export type ListaDeProdutosUpsertWithWhereUniqueWithoutProdutoInput = {
    where: ListaDeProdutosWhereUniqueInput
    update: XOR<ListaDeProdutosUpdateWithoutProdutoInput, ListaDeProdutosUncheckedUpdateWithoutProdutoInput>
    create: XOR<ListaDeProdutosCreateWithoutProdutoInput, ListaDeProdutosUncheckedCreateWithoutProdutoInput>
  }

  export type ListaDeProdutosUpdateWithWhereUniqueWithoutProdutoInput = {
    where: ListaDeProdutosWhereUniqueInput
    data: XOR<ListaDeProdutosUpdateWithoutProdutoInput, ListaDeProdutosUncheckedUpdateWithoutProdutoInput>
  }

  export type ListaDeProdutosUpdateManyWithWhereWithoutProdutoInput = {
    where: ListaDeProdutosScalarWhereInput
    data: XOR<ListaDeProdutosUpdateManyMutationInput, ListaDeProdutosUncheckedUpdateManyWithoutListaDeProdutosInput>
  }

  export type CompraCreateWithoutListaDeProdutosInput = {
    total: number
    tipo_pagamento: Pagamento
    status?: Status
    data_criacao?: Date | string
  }

  export type CompraUncheckedCreateWithoutListaDeProdutosInput = {
    id?: number
    total: number
    tipo_pagamento: Pagamento
    status?: Status
    data_criacao?: Date | string
  }

  export type CompraCreateOrConnectWithoutListaDeProdutosInput = {
    where: CompraWhereUniqueInput
    create: XOR<CompraCreateWithoutListaDeProdutosInput, CompraUncheckedCreateWithoutListaDeProdutosInput>
  }

  export type ProdutoCreateWithoutListaDeProdutosInput = {
    nome: string
    descricao: string
    preco: number
    data_criacao?: Date | string
    data_atualizacao?: Date | string
  }

  export type ProdutoUncheckedCreateWithoutListaDeProdutosInput = {
    id?: number
    nome: string
    descricao: string
    preco: number
    data_criacao?: Date | string
    data_atualizacao?: Date | string
  }

  export type ProdutoCreateOrConnectWithoutListaDeProdutosInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutListaDeProdutosInput, ProdutoUncheckedCreateWithoutListaDeProdutosInput>
  }

  export type CompraUpsertWithoutListaDeProdutosInput = {
    update: XOR<CompraUpdateWithoutListaDeProdutosInput, CompraUncheckedUpdateWithoutListaDeProdutosInput>
    create: XOR<CompraCreateWithoutListaDeProdutosInput, CompraUncheckedCreateWithoutListaDeProdutosInput>
  }

  export type CompraUpdateWithoutListaDeProdutosInput = {
    total?: FloatFieldUpdateOperationsInput | number
    tipo_pagamento?: EnumPagamentoFieldUpdateOperationsInput | Pagamento
    status?: EnumStatusFieldUpdateOperationsInput | Status
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompraUncheckedUpdateWithoutListaDeProdutosInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    tipo_pagamento?: EnumPagamentoFieldUpdateOperationsInput | Pagamento
    status?: EnumStatusFieldUpdateOperationsInput | Status
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProdutoUpsertWithoutListaDeProdutosInput = {
    update: XOR<ProdutoUpdateWithoutListaDeProdutosInput, ProdutoUncheckedUpdateWithoutListaDeProdutosInput>
    create: XOR<ProdutoCreateWithoutListaDeProdutosInput, ProdutoUncheckedCreateWithoutListaDeProdutosInput>
  }

  export type ProdutoUpdateWithoutListaDeProdutosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProdutoUncheckedUpdateWithoutListaDeProdutosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListaDeProdutosCreateManyCompraInput = {
    produtoId: number
    adicionado_em?: Date | string
  }

  export type ListaDeProdutosUpdateWithoutCompraInput = {
    produto?: ProdutoUpdateOneRequiredWithoutListaDeProdutosInput
    adicionado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListaDeProdutosUncheckedUpdateWithoutCompraInput = {
    produtoId?: IntFieldUpdateOperationsInput | number
    adicionado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListaDeProdutosUncheckedUpdateManyWithoutListaDeProdutosInput = {
    produtoId?: IntFieldUpdateOperationsInput | number
    adicionado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListaDeProdutosCreateManyProdutoInput = {
    compraId: number
    adicionado_em?: Date | string
  }

  export type ListaDeProdutosUpdateWithoutProdutoInput = {
    compra?: CompraUpdateOneRequiredWithoutListaDeProdutosInput
    adicionado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListaDeProdutosUncheckedUpdateWithoutProdutoInput = {
    compraId?: IntFieldUpdateOperationsInput | number
    adicionado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}