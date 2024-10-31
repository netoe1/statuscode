function isObjectEmpty(__object: object): boolean {
  if (Object.keys(__object).length === 0) {
    return true;
  }
  return false;
}

export { isObjectEmpty };
