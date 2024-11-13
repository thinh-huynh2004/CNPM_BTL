import { Inject, Injectable } from '@nestjs/common'
import { Student } from 'src/models/students.entity'
import { BaseServiceAbstract } from 'src/services/base/base.abstract.service'
import { StudentsRepositoryInterface } from './interfaces/students.interface'
import { DataSource, DeepPartial } from 'typeorm'
import { FilesService } from '../files/files.service'
import { File } from 'src/models/files.entity'

@Injectable()
export class StudentsService extends BaseServiceAbstract<Student> {
  constructor(
    @Inject('StudentsRepositoryInterface')
    private readonly students_repository: StudentsRepositoryInterface,
    private readonly filesService: FilesService,
    private readonly dataSource: DataSource,
  ) {
    super(students_repository)
  }

  async getStudentFiles(studentId: number) {
    return this.filesService.findAll({ where: { studentId: studentId } })
  }

  async getStudentPrinterHistory(studentId: number) {
    return this.dataSource
    .createQueryBuilder()
    .select(['file.studentId', 'file.id', 'file.name']) // Use array format for multiple fields
    .from(File, 'file')
    .where('file.studentId = :studentId', { studentId })
    .innerJoinAndSelect('file.printerFiles', 'printerFile') // Join File with PrinterFile
    .getMany();
  }
}
