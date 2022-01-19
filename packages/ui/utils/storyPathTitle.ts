const storyPathTitle = (base = ``, fileName = ``) => {
  // remove '/' if it is a the charactor
  const modBase = base.replace(/^\//, ``);
  return `${modBase}${fileName.split(`.`)[0]}`;
};

export default storyPathTitle;
