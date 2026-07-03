import { randomBytes } from 'crypto'

/**
 * Generate a unique, human-friendly enrollment id, e.g. "IS-7GKQ-4821".
 * Uses crypto random bytes — collision-safe enough for this scale, and readable
 * for support/email references.
 */
export function generateEnrollmentId(): string {
  const alphabet = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789' // no ambiguous chars (0/O, 1/I/L)
  const bytes = randomBytes(4)
  let block = ''
  for (let i = 0; i < 4; i++) block += alphabet[bytes[i] % alphabet.length]
  const numeric = (bytes.readUInt16BE(0) % 9000) + 1000
  return `IS-${block}-${numeric}`
}
