package com.nishanth.Student.system.service;

import com.nishanth.Student.system.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}
