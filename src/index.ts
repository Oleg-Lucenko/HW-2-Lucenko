class School {
    // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods
  
    _areas: Area[] = [];
    _lecturers: Object[] = []; // Name, surname, position, company, experience, courses, contacts
  
    get areas(): Area[] {
      return this._areas;
    };
  
    get lecturers(): Object[] {
      return this._lecturers;
    };

    addArea(area: Area): void {
        this._areas.push(area);
    };

    addLecturer(lecturer: Object): void {
        this._lecturers.push(lecturer);
    };

    removeArea(area: Area): void {
        this._areas.splice(this._areas.indexOf(area), 1);
    };

    removeLecturer(lecturer: Object): void {
        this._areas.splice(this._lecturers.indexOf(lecturer), 1);
    };
  };
  
  class Area {
    // implement getters for fields and 'add/remove level' methods
    _levels: Level[] = [];
    _name: string;
  
    constructor(name: string) {
      this._name = name;
    };

    get levels(): Level[] {
        return this._levels;
    };

    get name(): string {
        return this._name;
    };

    addArea(level: Level): void {
        this._levels.push(level);
    };

    removeArea(level: Level): void {
        this._levels.splice(this._levels.indexOf(level), 1);
    };
  };
  
  class Level {
    // implement getters for fields and 'add/remove group' methods
  
    _groups: Group[] = [];
    _name: string;
    _description: string;
  
    constructor(name: string, description: string) {
      this._name = name;
      this._description = description;
    };

    get groups(): Group[] {
      return this._groups;
    };

    get name(): string {
      return this._name;
    };

    get description(): string {
      return this._description;
    };

    addGroup(group: Group): void {
      this._groups.push(group);
    };


    removeGroup(group: Group): void {
      this._groups.splice(this._groups.indexOf(group), 1);
    };

  };
  
  class Group {
    // implement getters for fields and 'add/remove student' and 'set status' methods
  
    _area: Area;
    _status: string;
    _directionName: string;
    _levelName: string;
    _students: Student[] = []; // Modify the array so that it has a valid toSorted method*
  
    constructor(directionName: string, levelName: string) {
      this._directionName = directionName;
      this._levelName = levelName;
    };

    get area(): Area {
      return this._area;
    };

    get status(): string {
      return this._status;
    };

    get directionName(): string {
      return this._directionName;
    };

    get levelName(): string {
      return this._levelName;
    };

    get students(): Student[] {
      return this._students;
    };

    addStudent(student: Student): void {
      this._students.push(student);
    };

    removeStudent(student: Student): void {
      this._students.splice(this._students.indexOf(student), 1);
    };

    setStatus(status: string): void {
      this._status = status;
    };
  
    showPerformance(): Student[] {
      const sortedStudents = this._students.toSorted((a: Student, b: Student) => b.getPerformanceRating() - a.getPerformanceRating());
      return sortedStudents;
    };
  };
  
  class Student {
    // implement 'set grade' and 'set visit' methods
  
    _firstName: string;
    _lastName: string;
    _birthYear: number;
    _grades: {[workName: string]: number} = {}; // workName: mark
    _visits: boolean[] = []; // lesson: present
  
    constructor(firstName: string, lastName: string, birthYear: number) {
      this._firstName = firstName;
      this._lastName = lastName;
      this._birthYear = birthYear;
    };
  
    get fullName(): string {
      return `${this._lastName} ${this._firstName}`;
    };
  
    set fullName(value: string) {
      [this._lastName, this._firstName] = value.split(' ');
    };
  
    get age(): number {
      return new Date().getFullYear() - this._birthYear;
    };

    setGrade(workName: string, mark: number): void {
      this._grades[workName] = mark;
    };

    setVisit(presence: boolean): void {
      this._visits.push(presence);
    };
  
    getPerformanceRating(): number {
      const gradeValues = Object.values(this._grades);
  
      if (!gradeValues.length) return 0;
  
      const averageGrade = gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;
      const attendancePercentage = (this._visits.filter(present => present).length / this._visits.length) * 100;
  
      return (averageGrade + attendancePercentage) / 2;
    };
  };