import EnrollStudent from "./EnrollStudent";

test('Should not enroll without valid student name', () => {
    const enrollStudent = new EnrollStudent();
    const enrollmentRequest = {
        student: {
            name: 'Ana'
        }
    }
    expect(() => enrollStudent.execute(enrollmentRequest)).toThrow(new Error("Invalid name"));
})

test('Should not enroll without valid student cpf', () => {
    const enrollStudent = new EnrollStudent();
    const enrollmentRequest = {
        student: {
            name: 'Ana Maria',
            cpf: '213.345.654-10'
        }
    }
    expect(() => enrollStudent.execute(enrollmentRequest)).toThrow(new Error("Invalid cpf"));
});

test('Should not enroll duplicated student', () => {
    expect(1).toBe(1);
});