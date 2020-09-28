interface IStudent {
  name: string
  score: number
}

interface IStore {
  subject: string
  students: IStudent[]
}

interface IStudentUpdateScore {
  name: string
  scores: Record<string, number>
}

interface IRemoveStudentScore {
  name: string
  subject: string
}
interface IStudentScore {
  [key: string]: any
}

export const updateStudentScore = (store: IStore[], update: IStudentUpdateScore): IStore[] => {
  Object.entries(update.scores).forEach(element => {
    const dataSubject = store.find(m => m.subject == element[0]);

    dataSubject == undefined ? store.push({
      subject: element[0],
      students: [{ name: update.name, score: element[1] }]
    }) : (dataSubject.students.find(m => m.name == update.name) == undefined ? dataSubject.students.push({ name: update.name, score: element[1] }) : dataSubject.students.find(m => m.name == update.name).score = element[1]);
  });
  return store
}

export const removeStudentScoreBySubject = (store: IStore[], record: IRemoveStudentScore): IStore[] => {
  const index: number = store.find(m => m.subject == record.subject).students.findIndex(m => m.name == record.name)
  store.find(m => m.subject == record.subject).students.splice(index, 1);
  return store
}

export const getStudentScoreBySubject = (store: IStore[], subjects: string[]): IStudentScore[] => {
  const resule = new Array
  subjects.forEach(subject => {
    store.find(store => store.subject == subject).students.forEach(student => {

      const fineStudent = resule.find(m => m.name == student.name)
      if (!fineStudent) {
        resule.push({ name: student.name })
        subjects.forEach(subject => {
          const sudentName = resule.find(m => m.name == student.name)
          sudentName[subject] = null
        })
      }
      const checkResule = resule.find(m => m.name == student.name)
      checkResule ? checkResule[subject] = student.score : resule.push({ name: student.name, [subject]: student.score })
    })
  })
  return resule
}
