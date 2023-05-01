import bcrypt from "bcrypt";

export function hashPassword(password: string) {
  let salt_rounds = Number(process.env.SALT_ROUNDS);
  bcrypt.hash(password, salt_rounds, function (err, hash) {
    if (err) return undefined;
    return hash;
  });
}

export function verifyPassword(entered_password: string, hash: string) {
  bcrypt.compare(entered_password, hash, function (err, result) {
    if (err) return undefined;
    return result;
  });
}
